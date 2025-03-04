/** @format */

const {
  createComment,
  getCommentByPostId,
  addReaction,
  deleteComment,
  updateComment,
  handleReaction,
  getReactionsByComment,
  handlePostReactionService,
  getReactionsByPostService,
} = require("../Services/CommentsService");
const { validateComment } = require("../utils/commentValidator");

const createCommentController = async (req, res) => {
  try {
    const { postId } = req.params;
    const { content, user_id } = req.body;

    if (!content || !user_id) {
      return res.status(400).json({
        error: true,
        message: "Missing required fields",
      });
    }

    const comment = await createComment({
      content,
      user_id,
      post_id: postId,
    });

    res.status(201).json({
      error: false,
      data: comment,
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      message: error.message,
    });
  }
};

const getCommentsByPost = async (req, res) => {
  try {
    const { postId } = req.params; // Đổi post_id thành postId cho khớp với route

    if (!postId) {
      return res.status(400).json({
        error: true,
        message: "Post ID is required",
      });
    }

    const comments = await getCommentByPostId(postId);
    res.json({
      error: false,
      data: comments,
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      message: error.message,
    });
  }
};

const deleteCommentController = async (req, res) => {
  try {
    const { comment_id } = req.params;
    const user_id = req.user.id;

    await deleteComment(comment_id, user_id);
    res.json({
      error: false,
      message: "Comment deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      message: error.message,
    });
  }
};

const updateCommentController = async (req, res) => {
  try {
    const { comment_id } = req.params;
    const { content } = req.body;
    const user_id = req.user.id;

    const comment = await updateComment(comment_id, user_id, content);
    res.json({
      error: false,
      data: comment,
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      message: error.message,
    });
  }
};

const createReactionController = async (req, res) => {
  try {
    const { commentId } = req.params;
    const { type, user_id } = req.body;

    if (!type || !user_id) {
      return res.status(400).json({
        error: true,
        message: "Missing required fields",
      });
    }

    const reaction = await handleReaction({
      type,
      comment_id: commentId,
      user_id,
    });

    res.json({
      error: false,
      data: reaction,
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      message: error.message,
    });
  }
};

const getReactionByPostController = async (req, res) => {
  try {
    const { commentId } = req.params;
    const reactions = await getReactionsByComment(commentId);

    res.json({
      error: false,
      data: reactions,
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      message: error.message,
    });
  }
};

const createReactionPostController = async (req, res) => {
  try {
    const { postId } = req.params;
    const { type, user_id } = req.body;
    // Log để debug
    console.log("Request body:", req.body);
    console.log("PostId:", postId);
    console.log("Type:", type);
    console.log("User ID:", user_id);
    if (!postId || !type || !user_id) {
      return res.status(400).json({
        error: true,
        message: "Missing required fields",
      });
    }
    const reaction = await handlePostReactionService({
      type,
      user_id,
      post_id: postId,
    });
    res.json({
      error: false,
      action: reaction.action,
      data: reaction.data,
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      message: error.message,
    });
  }
};

const getPostReactionController = async (req, res) => {
  const { postId } = req.params;
  const reactions = await getReactionsByPostService(postId);
  res.json({
    error: false,
    data: reactions,
  });
};
module.exports = {
  createCommentController,
  getCommentsByPost,
  deleteCommentController,
  updateCommentController,
  createReactionController,
  getReactionByPostController,
  createReactionPostController,
  getPostReactionController,
};
