/** @format */
const express = require("express");
const router = express.Router();
const {
  createCommentController,
  getCommentsByPost,
  updateCommentController,
  deleteCommentController,
  createReactionController,
  getReactionByPostController,
} = require("../Controllers/CommentsController");

router.post("/comments/posts/:postId/comments", createCommentController);
router.get("/comments/posts/:postId/comments", getCommentsByPost);
router.put("/comments/:commentId", updateCommentController);
router.delete("/comments/:commentId", deleteCommentController);

// Reactions
router.post("/comment/:commentId", createReactionController);
router.get("/comment/:commentId", getReactionByPostController);
module.exports = router;
