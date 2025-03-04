/** @format */

// routes/reaction.js
const express = require("express");
const {
  createReactionController,
  getReactionByPostController,
  createReactionPostController,
  getPostReactionController,
} = require("../Controllers/CommentsController");

const router = express.Router();

// // POST /api/reactions/comment/:commentId
router.post("/comment/:commentId", createReactionController);

// GET /api/reactions/comment/:commentId
router.get("/comment/:commentId", getReactionByPostController);

router.post("/post/:postId/reactions", createReactionPostController);

router.get("/post/:postId/reactions", getPostReactionController);

module.exports = router;
