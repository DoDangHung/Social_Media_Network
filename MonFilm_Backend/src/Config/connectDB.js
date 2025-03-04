/** @format */

// config/db.js
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("monfilm", "root", null, {
  host: "localhost",
  dialect: "mysql",
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connected to MySQL using Sequelize");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = { sequelize, connectDB };
