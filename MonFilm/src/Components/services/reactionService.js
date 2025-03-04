/** @format */

import axios from "axios";

const API_URL = "http://localhost:8080/api";

export const getCurrentUser = () => {
  const userId = localStorage.getItem("userId");
  if (!userId) return null;
  return {
    id: parseInt(userId),
  };
};

export const createReaction = async (postId, type) => {
  const currentUser = getCurrentUser();
  const token = localStorage.getItem("token");

  if (!currentUser || !currentUser.id) {
    throw new Error("Vui lòng đăng nhập để thực hiện chức năng này");
  }

  try {
    const response = await axios.post(
      `${API_URL}/post/${postId}/reactions`,
      {
        type,
        user_id: currentUser.id,
        post_id: postId,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const getReaction = async (postId) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${API_URL}/post/${postId}/reactions`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
