/** @format */

import React from "react";
import { NavLink } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";
import SearchLastName from "./SearchLastName";
import ActionButtons from "./ActionButtons";
import DataTable from "./DataTable";
import Pagination from "./Pagination";

const Admin = () => {
  return (
    <>
      <div
        className="relative flex size-full min-h-screen flex-col bg-[#FFFFFF] group/design-root overflow-x-hidden"
        style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
      >
        <div className="layout-container flex h-full grow flex-col">
          <AdminHeader />
          <div className="gap-1 px-6 flex flex-1 justify-center py-5">
            <AdminSidebar />
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
              <ActionButtons />

              <DataTable />
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
