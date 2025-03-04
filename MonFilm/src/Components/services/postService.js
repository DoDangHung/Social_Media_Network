/** @format */
import axios from "axios";
const API_URL = "http://localhost:8080/api/";

export const getAllPost = async () => {
  try {
    const res = await axios.get(`${API_URL}get-all-post`);
    console.log(res.data, "res get all posts");
    return res.data;
  } catch (error) {
    throw new Error("Error creating post: " + error.message);
  }
};

export const postContent = async ({ userId, content, images }) => {
  const token = localStorage.getItem("token");
  const response = await fetch(`${API_URL}posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      user_id: userId,
      content,
      images,
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Failed to create post");
  }

  return response.json();
};

export const postByUser = async (userId) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${API_URL}/posts/user/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Không có dữ liệu.");
  }
};
