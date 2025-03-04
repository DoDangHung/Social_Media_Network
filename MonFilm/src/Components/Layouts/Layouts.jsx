/** @format */

import { Outlet } from "react-router-dom";
import AdminSidebar from "../../pages/Admin/AdminSidebar";
import AdminHeader from "../../pages/Admin/AdminHeader";
import DataTable from "../../pages/Admin/DataTable";
import Admin from "../../pages/Admin/admin";
import SearchLastName from "../../pages/Admin/SearchLastName";
import ActionButtons from "../../pages/Admin/ActionButtons";

const Layouts = () => {
  return (
    <>
      <div className="w-full">
        <header>
          <AdminHeader />
        </header>
        <div style={{ display: "flex" }}>
          <AdminSidebar />
          <main style={{ width: "100%" }}>
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};
export default Layouts;
