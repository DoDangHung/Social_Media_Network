/** @format */

import React from "react";
const LogOut = ({ onClick }) => {
  return (
    <div>
      <div className="dropdown-item">
        <i className="fa-solid fa-arrow-right-from-bracket"></i>
        <button onClick={onClick}>Log out</button>
      </div>
    </div>
  );
};

export default LogOut;
