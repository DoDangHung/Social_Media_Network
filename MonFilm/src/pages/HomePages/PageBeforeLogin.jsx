/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
import "./PageBeforeLogin.scss";

const PageBeforeLogin = () => {
  const navigate = useNavigate();
  const onChangeToLogin = () => {
    navigate("/login");
  };
  return (
    <div>
      <div>
        <div className=" flex h-full grow flex-col">
          <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#F4EFE6] px-10 py-3">
            <div className="flex items-center gap-4 text-[#1C160C]">
              <div className="size-4">
                <svg
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h2 className="text-[#1C160C] text-lg font-bold leading-tight tracking-[-0.015em]">
                MonFansub
              </h2>
            </div>
          </header>
          <div className="section">
            <div className="content-intro">
              <h1 className="intro-text">
                Place <span className="_hightlight_8729n_78">Great</span> for{" "}
                <br />
                Doraemon fans
              </h1>
              <p>
                Mon Fansub provides everyone with a platform to store and share
                Doraemon videos and is also a place for the community who love
                Doraemon.
              </p>
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#019863] text-[#FFFFFF] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                <span className="truncate">
                  <button type="submit" onClick={onChangeToLogin}>
                    Join now
                  </button>
                </span>
              </button>
            </div>
            <div className="content-preview">
              <div className="preview-img">
                <div className="img"></div>
              </div>
            </div>
          </div>
          <div className="section2">
            <div className="text">
              <h1 style={{ fontSize: "2.25rem" }}>
                Có mặt ở mọi nền tảng mà bạn yêu thích
              </h1>
              <p style={{ fontSize: "0.875rem" }}>
                Mon Fansub có mặt trên nhiều nền tảng khác nhau để bạn dễ dàng
                truy cập, kể cả tủ lạnh của bạn.
              </p>
            </div>
            <div className="preview-img2">
              <div className="img2"></div>
            </div>
          </div>
          <div className="footer">
            <div className="footer-container">
              <span>
                © 2024 Mon Fansub. Terms of use and privacy policy For any
                questions, please contact Fanpage Mon Fansub or Email
                support@monfansubvn.com.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageBeforeLogin;
