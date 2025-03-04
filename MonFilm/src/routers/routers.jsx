/** @format */
import React from "react";
import { Route } from "react-router-dom";
import LoginPage from "../pages/Auth/LoginPage";
import HomePage from "../Components/container/HomePage";
import FrontEndLayout from "../Components/Layouts/FrontEndLayout";
import Profile from "../pages/DropDown/Profile/Profile";
import ChatSupport from "../pages/DropDown/ChatSupport";
import HistoryWatch from "../pages/DropDown/HistoryWatch";
import Transaction from "../pages/DropDown/Transaction";
import Wallet from "../pages/DropDown/Wallet";
import Setting from "../pages/DropDown/Setting";
import ActiveCode from "../pages/DropDown/ActiveCode";
import PurchaseCode from "../pages/DropDown/PurchaseCode";
import Layouts from "../Components/Layouts/Layouts";
import Dashboard from "../pages/Admin/containers/Dashboard";
import ManageUsers from "../pages/Admin/containers/ManageUsers";
import ContentManagement from "../pages/Admin/containers/ContentManagement";
import Actor from "../pages/Admin/containers/Actor";
import Film from "../pages/Admin/containers/Film";
import AddUser from "../Components/AddUser";
import EditUser from "../Components/EditUser";
import PageBeforeLogin from "../pages/HomePages/PageBeforeLogin";
import Posted from "../pages/DropDown/Profile/Posted";

const routes = [
  // Routes before login
  {
    path: "/",
    element: <PageBeforeLogin />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },

  // Routes for the frontend layout
  {
    path: "/homepage",
    element: <FrontEndLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "profile", element: <Profile /> },
      { path: "profile/posted", element: <Posted /> },
      { path: "chatSupport", element: <ChatSupport /> },
      { path: "history-watch", element: <HistoryWatch /> },
      { path: "transaction", element: <Transaction /> },
      { path: "wallet", element: <Wallet /> },
      { path: "setting", element: <Setting /> },
      { path: "active-code", element: <ActiveCode /> },
      { path: "purchase-code", element: <PurchaseCode /> },
    ],
  },

  // Routes for admin panel
  {
    path: "/admin-panel",
    element: <Layouts />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "user-manage", element: <ManageUsers /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "content-manage", element: <ContentManagement /> },
      { path: "actor", element: <Actor /> },
      { path: "film", element: <Film /> },
      { path: "add", element: <AddUser /> },
      { path: "edit/:id", element: <EditUser /> },
    ],
  },
];

export default routes;
