/** @format */

import React, { useEffect, useState } from "react";
import HomeContent from "./HomeContent";
import "./HomeHeader.scss";
import { useNavigate } from "react-router-dom";
import LogOut from "../../pages/Auth/LogOut";
import Profile from "../../pages/DropDown/Profile/Profile";
const HomeHeader = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate();
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  // Đóng dropdown khi click vào ngoài
  const handleOutsideClick = (e) => {
    if (
      e.target.closest(".profile-image") ||
      e.target.closest(".dropdown-menu")
    )
      return;
    setDropdownVisible(false);
  };
  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  const handleLogOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const navigateRoute = (path) => {
    navigate(path);
  };
  return (
    <>
      <div className="design-root">
        <div className="layout-container">
          <header>
            <div className="header-left">
              <div className="logo">
                <svg
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h2 className="brand-title">monfansub</h2>
            </div>
            <div className="header-right">
              <div className="button-group">
                <button className="button">
                  <div
                    data-icon="Notification"
                    data-size="20px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M216,128v80a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V56A16,16,0,0,1,48,40h80a8,8,0,0,1,0,16H48V208H200V128a8,8,0,0,1,16,0Zm16-68a36,36,0,1,1-36-36A36,36,0,0,1,232,60Zm-16,0a20,20,0,1,0-20,20A20,20,0,0,0,216,60Z" />
                    </svg>
                  </div>
                </button>
                <button className="button">
                  <div data-icon="User" data-size="20px" data-weight="regular">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z" />
                    </svg>
                  </div>
                </button>
              </div>
              <div style={{ position: "relative" }}>
                {/* Hình ảnh avatar */}
                <div className="profile-image" onClick={toggleDropdown} />

                {/* Dropdown menu */}
                <div
                  className={`dropdown-menu ${
                    dropdownVisible ? "show" : "hide"
                  }`}
                >
                  <div className="dropdown-item">
                    <i className="fa-regular fa-user"></i>
                    <button onClick={() => navigateRoute("/homepage/profile")}>
                      Profile
                    </button>
                  </div>
                  <div className="dropdown-item">
                    <i className="fa-regular fa-comment"></i>
                    <button
                      onClick={() => navigateRoute("/homepage/chatSupport")}
                    >
                      Chat support
                    </button>
                  </div>

                  <div className="dropdown-item">
                    <i className="fa-regular fa-clock"></i>
                    <button
                      onClick={() => navigateRoute("/homepage/history-watch")}
                    >
                      History
                    </button>
                  </div>
                  <div className="dropdown-item">
                    <i className="fa-solid fa-wallet"></i>
                    <button
                      onClick={() => navigateRoute("/homepage/transaction")}
                    >
                      Transaction History
                    </button>
                  </div>
                  <div className="dropdown-item">
                    <i className="fa-solid fa-toggle-off"></i>
                    <button>Interface</button>
                  </div>
                  <div className="dropdown-item">
                    <i className="fa-regular fa-credit-card"></i>
                    <button onClick={() => navigateRoute("/homepage/wallet")}>
                      Deposit
                    </button>
                  </div>
                  <div className="dropdown-item">
                    <i className="fa-solid fa-gear"></i>
                    <button onClick={() => navigateRoute("/homepage/setting")}>
                      Setting
                    </button>
                  </div>
                  <div className="divider"></div>
                  <div className="dropdown-item">
                    <i className="fa-solid fa-barcode"></i>
                    <button>Enter activation code</button>
                  </div>
                  <div className="dropdown-item">
                    <i className="fa-solid fa-cart-shopping"></i>
                    <button>Purchase activation code</button>
                  </div>
                  <div className="divider"></div>
                  <LogOut onClick={handleLogOut} />
                </div>
              </div>
            </div>
          </header>
          <div className="overLay"></div>
        </div>
      </div>
    </>
  );
};

export default HomeHeader;
