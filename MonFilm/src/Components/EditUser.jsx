/** @format */

// src/components/EditUser.js
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getAllUsers, updateUser } from "./services/userService";

const EditUser = () => {
  const [user, setUser] = useState({});
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const { id } = useParams(); // Lấy ID người dùng từ URL
  const history = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await getAllUsers(id);
        setUser(response.data.users); // Cập nhật dữ liệu người dùng
        setUsername(response.data.users.username);
        setEmail(response.data.users.email);
      } catch (error) {
        console.error("There was an error fetching the user data!", error);
      }
    };
    fetchUser();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedData = { username, email, password };

    try {
      await updateUser(id, updatedData);
      history("/"); // Quay về trang danh sách người dùng
    } catch (error) {
      console.error("There was an error updating the user!", error);
    }
  };

  return (
    <div className="edit-user-container">
      <h2>Edit User</h2>
      <form className="edit-user-form" onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <button type="submit">Update User</button>
      </form>
    </div>
  );
};

export default EditUser;
