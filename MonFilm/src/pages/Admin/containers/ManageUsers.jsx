/** @format */

import React, { useEffect, useState } from "react";
import AdminHeader from "../AdminHeader";
import AdminSidebar from "../AdminSidebar";
import {
  deleteUser,
  getAllUsers,
} from "../../../Components/services/userService";
import { Link } from "react-router-dom";
import SearchLastName from "../SearchLastName";
import ActionButtons from "../ActionButtons";
import Pagination from "../Pagination";
// import "./Dashboard.css";
const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getAllUsers("ALL");
        setUsers(response.data.users);
        setLoading(false);
      } catch (error) {
        console.error("There was an error fetching the users!", error);
      }
    };
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    // Xử lý xóa người dùng
    try {
      await deleteUser(id);
      setUsers(users.filter((user) => user.id !== id)); // Cập nhật lại danh sách sau khi xóa
    } catch (error) {
      console.error("Error deleting user", error);
    }
  };
  return (
    <>
      <SearchLastName />
      <ActionButtons />
      <div className="px-4 py-3 @container">
        <div className="flex overflow-hidden rounded-xl border border-[#E9DFCE] bg-[#FFFFFF]">
          <table className="flex-1 justify-center">
            <thead>
              <tr className="bg-[#FFFFFF]">
                <th>Users ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50 even:bg-gray-100">
                  <td className="px-4 py-3 text-sm text-gray-700 font-medium text-center">
                    {user.id}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700 text-center">
                    {user.username}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700 text-center">
                    {user.email}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700 flex gap-3 justify-center text-center">
                    <Link
                      to={`/admin-panel/edit/${user.id}`}
                      className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Pagination />
      </div>
    </>
  );
};

export default ManageUsers;
