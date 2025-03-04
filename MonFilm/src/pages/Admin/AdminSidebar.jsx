/** @format */

import React from "react";
import { NavLink } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <div>
      <div className="layout-content-container flex flex-col w-80">
        <div className="flex h-full min-h-[700px] flex-col justify-between bg-[#FFFFFF] p-4">
          <div className="flex flex-col gap-4">
            <div className="flex gap-3">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                style={{
                  backgroundImage:
                    'url("https://cdn.usegalileo.ai/sdxl10/3a9af0dd-6e17-47aa-b63f-3b2edf8d47de.png")',
                }}
              />
              <div className="flex flex-col">
                <h1 className="text-[#1C160C] text-base font-medium leading-normal">
                  Original CRUD Admin Panel
                </h1>
                <p className="text-[#A18249] text-sm font-normal leading-normal">
                  By AppGini
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2 cursor-pointer">
              <NavLink
                to="/admin-panel/dashboard"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center gap-3 px-3 py-2 bg-gray-200 rounded-lg"
                    : "flex items-center gap-3 px-3 py-2"
                }
              >
                <div className="text-[#1C160C]" data-icon="Gauge">
                  {/* SVG icon Dashboard */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M207.06,80.67A111.24,111.24,0,0,0,128,48h-.4C66.07,48.21,16,99,16,161.13V184a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V160A111.25,111.25,0,0,0,207.06,80.67ZM224,184H119.71l54.76-75.3a8,8,0,0,0-12.94-9.42L99.92,184H32V161.13c0-3.08.15-6.12.43-9.13H56a8,8,0,0,0,0-16H35.27c10.32-38.86,44-68.24,84.73-71.66V88a8,8,0,0,0,16,0V64.33A96.14,96.14,0,0,1,221,136H200a8,8,0,0,0,0,16h23.67c.21,2.65.33,5.31.33,8Z" />
                  </svg>
                </div>
                <p className="text-[#1C160C] text-sm font-medium leading-normal">
                  Dashboard
                </p>
              </NavLink>

              <NavLink
                to="/admin-panel/user-manage"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center gap-3 px-3 py-2 bg-gray-200 rounded-lg"
                    : "flex items-center gap-3 px-3 py-2"
                }
              >
                <div className="text-[#1C160C]" data-icon="Gauge">
                  {/* SVG icon Dashboard */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M207.06,80.67A111.24,111.24,0,0,0,128,48h-.4C66.07,48.21,16,99,16,161.13V184a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V160A111.25,111.25,0,0,0,207.06,80.67ZM224,184H119.71l54.76-75.3a8,8,0,0,0-12.94-9.42L99.92,184H32V161.13c0-3.08.15-6.12.43-9.13H56a8,8,0,0,0,0-16H35.27c10.32-38.86,44-68.24,84.73-71.66V88a8,8,0,0,0,16,0V64.33A96.14,96.14,0,0,1,221,136H200a8,8,0,0,0,0,16h23.67c.21,2.65.33,5.31.33,8Z" />
                  </svg>
                </div>
                <p className="text-[#1C160C] text-sm font-medium leading-normal">
                  User Management
                </p>
              </NavLink>

              <NavLink
                to="/admin-panel/content-manage"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center gap-3 px-3 py-2 bg-gray-200 rounded-lg"
                    : "flex items-center gap-3 px-3 py-2"
                }
              >
                <div className="text-[#1C160C]" data-icon="Gauge">
                  {/* SVG icon Dashboard */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M207.06,80.67A111.24,111.24,0,0,0,128,48h-.4C66.07,48.21,16,99,16,161.13V184a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V160A111.25,111.25,0,0,0,207.06,80.67ZM224,184H119.71l54.76-75.3a8,8,0,0,0-12.94-9.42L99.92,184H32V161.13c0-3.08.15-6.12.43-9.13H56a8,8,0,0,0,0-16H35.27c10.32-38.86,44-68.24,84.73-71.66V88a8,8,0,0,0,16,0V64.33A96.14,96.14,0,0,1,221,136H200a8,8,0,0,0,0,16h23.67c.21,2.65.33,5.31.33,8Z" />
                  </svg>
                </div>
                <p className="text-[#1C160C] text-sm font-medium leading-normal">
                  Content Management
                </p>
              </NavLink>

              {/* NavLink Actor */}
              <NavLink
                to="/admin-panel/actor"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center gap-3 px-3 py-2 bg-gray-200 rounded-lg"
                    : "flex items-center gap-3 px-3 py-2"
                }
              >
                <div className="text-[#1C160C]" data-icon="User">
                  {/* SVG icon Actor */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M230.93,220a8,8,0,0,1-6.93,4H32a8,8,0,0,1-6.92-12c15.23-26.33,38.7-45.21,66.09-54.16a72,72,0,1,1,73.66,0c27.39,8.95,50.86,27.83,66.09,54.16A8,8,0,0,1,230.93,220Z" />
                  </svg>
                </div>
                <p className="text-[#1C160C] text-sm font-medium leading-normal">
                  Actor
                </p>
              </NavLink>

              {/* NavLink Film */}
              <NavLink
                to="/admin-panel/film"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center gap-3 px-3 py-2 bg-gray-200 rounded-lg"
                    : "flex items-center gap-3 px-3 py-2"
                }
              >
                <div className="text-[#1C160C]" data-icon="Film">
                  {/* SVG icon Film */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M230.93,220a8,8,0,0,1-6.93,4H32a8,8,0,0,1-6.92-12c15.23-26.33,38.7-45.21,66.09-54.16a72,72,0,1,1,73.66,0c27.39,8.95,50.86,27.83,66.09,54.16A8,8,0,0,1,230.93,220Z" />
                  </svg>
                </div>
                <p className="text-[#1C160C] text-sm font-medium leading-normal">
                  Film
                </p>
              </NavLink>

              {/* Thêm các NavLink khác tương tự */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
