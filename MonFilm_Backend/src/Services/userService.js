/** @format */

const User = require("../models/user");

let getAllUsers = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let users = null; // Default to null if no users found

      if (userId === "ALL") {
        // Fetch all users excluding passwords
        users = await User.findAll({
          attributes: {
            exclude: ["password"], // Exclude password field
          },
        });
      } else if (userId && userId !== "ALL") {
        // Fetch a single user based on the provided userId
        users = await User.findOne({
          where: { id: userId },
          attributes: {
            exclude: ["password"], // Exclude password field
          },
        });
      }

      // If no user or users found
      if (!users) {
        resolve(null); // Resolve with null if no users are found
      } else {
        resolve(users); // Resolve with the user(s) found
      }
    } catch (e) {
      reject(e); // Reject the promise if an error occurs
    }
  });
};

let deleteUser = (userId) => {
  return new Promise(async (resolve, reject) => {
    let foundUser = await db.User.findOne({
      where: { id: userId },
    });
    if (!foundUser) {
      resolve({
        errCode: 2,
        errMessage: `The user isn't exist!`,
      });
    }
    await User.destroy({
      where: { id: userId },
    });
    resolve({
      errCode: 0,
      message: `The user is deleted!`,
    });
  });
};

module.exports = {
  deleteUser: deleteUser,
  getAllUsers: getAllUsers,
};
