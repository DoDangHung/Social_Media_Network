/** @format */

// routes/authRoutes.js
const express = require("express");
const {
  register,
  login,
  updateUser,
  deleteUser,
  getAllUser,
  getUserById,
} = require("../Controllers/authController");
const { postController } = require("../Controllers/postController");

const router = express.Router();
router.get("/get-all-users", getAllUser);
router.get("/:userId", getUserById);
router.post("/register", register);
router.post("/login", login);
// router.post("/posts", postController);
router.put(
  "/:id",
  (req, res, next) => {
    console.log("PUT request received for user with ID:", req.params.id);
    next();
  },
  updateUser
);
router.delete("/:id", deleteUser);

module.exports = router;
