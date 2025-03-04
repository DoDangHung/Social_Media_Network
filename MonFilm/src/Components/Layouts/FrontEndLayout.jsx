/** @format */

import React from "react";
import HomeHeader from "../container/HomeHeader";
import SideBar from "../container/SideBar";
import { Outlet } from "react-router-dom";

const FrontEndLayout = () => {
  return (
    <>
      <header>
        <HomeHeader />
      </header>
      <div
        className=""
        style={{
          display: "flex",
          paddingLeft: "11.5rem",
          paddingRight: "11.5rem",
        }}
      >
        <section>
          <SideBar />
        </section>
        <main
          className=""
          style={{ display: "flex", flexDirection: "column", flex: "1 1 0%" }}
        >
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default FrontEndLayout;
