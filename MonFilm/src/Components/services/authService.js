/** @format */

// services/authService.js
export const getAuthInfo = () => {
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
  return {
    token,
    userId: userId ? parseInt(userId) : null,
  };
};
