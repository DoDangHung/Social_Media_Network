/** @format */

import axios from "axios";

const API_URL = "http://localhost:8080/api/auth";

export const getAllUsers = (id) => {
  return axios.get(`${API_URL}/get-all-users?id=${id}`);
};

export const getUserById = (userId) => {
  return axios.get(`${API_URL}/${userId}`);
};
export const handleLogin = async (email, password) => {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error || "Login failed");
  }
  return data;
};
export const addUser = (username, userEmail, userPassword) => {
  return axios.post(`${API_URL}/register`, {
    username: username,
    email: userEmail,
    password: userPassword,
  });
};

export const updateUser = (id, userData) => {
  return axios.put(`${API_URL}/${id}`, userData);
};

export const deleteUser = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};
