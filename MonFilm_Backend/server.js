/** @format */

const express = require("express");
const bodyParser = require("body-parser");
const { connectDB } = require("./src/Config/connectDB");
const authRoutes = require("./src/routes/authRoutes");
const postRoutes = require("./src/routes/postRoutes");
const commentRoutes = require("./src/routes/commentRoutes");
const reactionRoutes = require("./src/routes/reactionRoutes");
const path = require("path");
const cors = require("cors");
require("dotenv").config();

let app = express();
app.use(cors({ credentials: true, origin: true }));

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

app.use("/api/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api/auth", authRoutes);
app.use("/api", postRoutes);
app.use("/api", commentRoutes);
app.use("/api", reactionRoutes);
connectDB();

let port = process.env.PORT || 6969;

app.listen(port, () => {
  console.log("Backend Nodejs is running on the port : " + port);
});
