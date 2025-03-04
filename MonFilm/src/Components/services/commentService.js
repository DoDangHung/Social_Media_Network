/** @format */

import axios from "axios";

const API_URL = "http://localhost:8080/api/comments";

const commentService = {
  async createComment(data) {
    try {
      const response = await axios.post(API_URL, data);
      return response.data;
    } catch (error) {
      throw (
        error.response?.data || {
          error: true,
          message: "Failed to create comment",
        }
      );
    }
  },

  async getCommentsByPost(postId) {
    try {
      const response = await axios.get(`${API_URL}/post/${postId}`);
      return response.data;
    } catch (error) {
      throw (
        error.response?.data || {
          error: true,
          message: "Failed to fetch comments",
        }
      );
    }
  },
};

export default commentService;
