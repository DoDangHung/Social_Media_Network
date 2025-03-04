/** @format */

import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Đăng ký các thành phần của Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  // Dữ liệu cho phần Thống kê nhanh
  const stats = [
    { title: "Users", value: 1200, icon: "👥", bgColor: "bg-blue-500" },
    { title: "Posts", value: 350, icon: "📝", bgColor: "bg-green-500" },
    { title: "Orders", value: 45, icon: "🛒", bgColor: "bg-yellow-500" },
    { title: "Views", value: 3000, icon: "👀", bgColor: "bg-red-500" },
  ];

  // Dữ liệu cho biểu đồ Bar (Doanh thu theo tháng)
  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Revenue ($)",
        data: [5000, 7000, 8000, 6000, 9000, 10000],
        backgroundColor: "rgba(75, 192, 192, 0.7)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Dữ liệu cho biểu đồ Pie (Tỉ lệ người dùng theo vai trò)
  const pieData = {
    labels: ["Admin", "Editor", "Viewer"],
    datasets: [
      {
        label: "User Roles",
        data: [10, 25, 65],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  // Dữ liệu To-Do
  const todos = [
    "Approve new post submissions",
    "Review user feedback reports",
    "Update website policies",
    "Check monthly revenue reports",
  ];

  return (
    <div className="p-4 space-y-6">
      {/* Phần Thống kê nhanh */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`flex items-center justify-between p-4 text-white rounded-lg shadow ${stat.bgColor}`}
          >
            <div className="text-3xl">{stat.icon}</div>
            <div className="text-right">
              <h3 className="text-sm">{stat.title}</h3>
              <p className="text-xl font-bold">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Phần biểu đồ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Biểu đồ cột */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-bold mb-4">Revenue Growth</h3>
          <Bar data={barData} />
        </div>

        {/* Biểu đồ tròn */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-bold mb-4">User Roles</h3>
          <Pie data={pieData} />
        </div>
      </div>

      {/* Danh sách công việc cần xử lý */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-bold mb-4">To-Do List</h3>
        <ul className="list-disc pl-5 space-y-2">
          {todos.map((todo, index) => (
            <li key={index} className="text-sm text-gray-700">
              {todo}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
