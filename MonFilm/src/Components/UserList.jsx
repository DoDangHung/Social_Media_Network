/** @format */

// src/components/UserList.js
import React, { useState, useEffect } from "react";
import { deleteUser, getAllUsers } from "./services/userService";
import { Link } from "react-router-dom";

const UserList = () => {
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
    try {
      await deleteUser(id);
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      console.error("Error deleting user", error);
    }
  };

  return (
    <>
      <div className="px-4 py-3 @container">
        <div className="flex overflow-hidden rounded-xl border border-[#E9DFCE] bg-[#FFFFFF]">
          <table className="flex-1">
            <thead>
              <tr className="bg-[#FFFFFF]">
                <th className="table-column px-4 py-3 text-left text-[#A18249] text-sm font-medium">
                  Action
                </th>
                <th className="table-column px-4 py-3 text-left text-sm font-medium">
                  Actor ID
                </th>
                <th className="table-column px-4 py-3 text-left text-sm font-medium">
                  First Name
                </th>
                <th className="table-column px-4 py-3 text-left text-sm font-medium">
                  Last Name
                </th>
                <th className="table-column px-4 py-3 text-left text-sm font-medium">
                  Last Update
                </th>
                <th className="table-column px-4 py-3 text-left text-sm font-medium">
                  Film
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link to={`/admin-panel/edit/${user.id}`}>Edit</Link>
                    <button onClick={() => handleDelete(user.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UserList;
