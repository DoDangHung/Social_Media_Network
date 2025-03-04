/** @format */

// controllers/authController.js
const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userService = require("../Services/userService");

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: "Email already in use" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    // Tạo JWT token
    const token = jwt.sign(
      { userId: newUser.id, email: newUser.email },
      process.env.JWT_SECRET, // Đảm bảo bạn đã có JWT_SECRET trong file .env
      { expiresIn: "24h" } // Token hết hạn sau 24h
    );

    res.status(201).json({
      message: "User registered successfully",
      userId: newUser.id,
      token: token,
    });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: "An error occurred during registration" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    // Find user
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid password" });
    }

    // Generate token
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // Thêm userId vào response
    res.status(200).json({
      message: "Login successful",
      username: user.username,
      token,
      userId: user.id,
    });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ error: "An error occurred during login" });
  }
};

const getAllUser = async (req, res) => {
  let id = req.query.id;

  // Check if the id parameter is missing
  if (!id) {
    return res.status(400).json({
      errCode: 1,
      errMessage: "Missing required parameters",
      users: [],
    });
  }

  try {
    // Get users from service
    let users = await userService.getAllUsers(id);

    // If no users are found (for a specific ID)
    if (!users) {
      return res.status(404).json({
        errCode: 2,
        errMessage: "User not found",
        users: [],
      });
    }

    // Return the users
    return res.status(200).json({
      errCode: 0,
      errMessage: "OK",
      users,
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    return res.status(500).json({
      errCode: 3,
      errMessage: "An error occurred while fetching users",
    });
  }
};

const getUserById = async (req, res) => {
  try {
    const { userId } = req.params;

    const user = await User.findByPk(userId, {
      attributes: ["id", "username", "email"],
    });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json({
      success: true,
      user,
    });
  } catch (error) {
    console.error("Error getting user:", error);
    res
      .status(500)
      .json({ error: "An error occurred while getting user information" });
  }
};
const updateUser = async (req, res) => {
  try {
    const { id } = req.params; // User ID from the URL
    const { username, email, password } = req.body; // User data from the request body

    // Find the user by ID
    const user = await User.findByPk(id); // Or use `findOne({ where: { id } })`

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Update the user data
    await user.update({
      username: username || user.username,
      email: email || user.email,
      password: password || user.password, // Hash password here if it's being updated
    });

    // Return the updated user data
    return res.status(200).json({
      message: "User updated successfully",
      user,
    });
  } catch (error) {
    console.error("Error updating user:", error);
    return res
      .status(500)
      .json({ error: "An error occurred while updating the user" });
  }
};

const deleteUser = async (req, res) => {
  if (!req.body.id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "Missing required parameters!",
    });
  }
  let message = await userService.deleteUser(req.body.id);
  return res.status(200).json(message);
};
module.exports = {
  register,
  login,
  updateUser,
  deleteUser,
  getAllUser,
  getUserById,
};
