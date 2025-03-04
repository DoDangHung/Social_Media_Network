/** @format */

import React, { useState } from "react";

const ContentManagement = () => {
  // Dữ liệu mẫu
  const [posts, setPosts] = useState([
    { id: 1, title: "Post 1", status: "Pending", author: "User A" },
    { id: 2, title: "Post 2", status: "Approved", author: "User B" },
    { id: 3, title: "Post 3", status: "Reported", author: "User C" },
  ]);

  const [library, setLibrary] = useState([
    { id: 1, name: "Image 1", type: "image", url: "image1.jpg" },
    { id: 2, name: "Video 1", type: "video", url: "video1.mp4" },
  ]);

  // Các hành động
  const approvePost = (id) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === id ? { ...post, status: "Approved" } : post
      )
    );
  };

  const deletePost = (id) => {
    setPosts((prev) => prev.filter((post) => post.id !== id));
  };

  const deleteMedia = (id) => {
    setLibrary((prev) => prev.filter((media) => media.id !== id));
  };

  return (
    <div className="p-6 space-y-6">
      {/* Quản lý bài viết */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-bold mb-4">Content Management</h3>
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="text-left px-4 py-2">Title</th>
              <th className="text-left px-4 py-2">Author</th>
              <th className="text-left px-4 py-2">Status</th>
              <th className="text-left px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id} className="border-b">
                <td className="px-4 py-2">{post.title}</td>
                <td className="px-4 py-2">{post.author}</td>
                <td className="px-4 py-2">{post.status}</td>
                <td className="px-4 py-2 flex gap-2">
                  <button
                    onClick={() => approvePost(post.id)}
                    className="px-3 py-1 bg-green-500 text-white rounded"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => deletePost(post.id)}
                    className="px-3 py-1 bg-red-500 text-white rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Quản lý thư viện ảnh/video */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-bold mb-4">Media Library</h3>
        <div className="grid grid-cols-2 gap-4">
          {library.map((media) => (
            <div key={media.id} className="border p-2 rounded-lg">
              {media.type === "image" ? (
                <img
                  src={media.url}
                  alt={media.name}
                  className="w-full h-40 object-cover rounded"
                />
              ) : (
                <video
                  src={media.url}
                  controls
                  className="w-full h-40 object-cover rounded"
                />
              )}
              <p className="mt-2 text-sm">{media.name}</p>
              <button
                onClick={() => deleteMedia(media.id)}
                className="mt-2 px-3 py-1 bg-red-500 text-white rounded"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentManagement;
