/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Posted from "./Posted";
import Watched from "./Watched";
import Active from "./Active";
import Following from "./Following";
import Blank_page from "./Blank_page";
const Profile = () => {
  const [activeTab, setActiveTab] = useState("post");
  const renderContent = () => {
    switch (activeTab) {
      case "noInfor":
        return <Blank_page />;
      case "post":
        return <Posted />;
      case "watched":
        return <Watched />;
      case "active":
        return <Active />;
      case "following":
        return <Following />;
      default:
        break;
    }
  };

  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#FFFFFF] group/design-root overflow-x-hidden"
      style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex p-4 @container">
              <div className="flex w-full flex-col gap-4 @[520px]:flex-row @[520px]:justify-between">
                <div className="flex gap-4">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-xl min-h-32 w-32"
                    style={{
                      backgroundImage:
                        'url("https://cdn.usegalileo.ai/sdxl10/e73f971a-4b2d-453f-bb03-e15c16324820.png")',
                    }}
                  />
                  <div className="flex flex-col">
                    <p className="text-[#1C160C] text-[22px] font-bold leading-tight tracking-[-0.015em]">
                      Hung Do
                    </p>
                    <p className="text-[#A18249] text-base font-normal leading-normal">
                      Chỉnh sửa thông tin
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="@container">
              <div className="@[480px]:px-4 @[480px]:py-3">
                <div
                  className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden bg-[#FFFFFF] @[480px]:rounded-xl min-h-[218px]"
                  style={{
                    backgroundImage:
                      'url("https://cdn.usegalileo.ai/sdxl10/b60f678e-cb5a-40e2-9cb3-011d5ab50728.png")',
                  }}
                />
              </div>
            </div>
            <div className="pb-3">
              <div className="flex border-b border-[#E9DFCE] px-4 justify-between">
                <button
                  onClick={() => setActiveTab("noInfor")}
                  className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#A18249] gap-1 pb-[7px] pt-2.5 flex-1"
                >
                  <p className="text-[#A18249] text-sm font-bold leading-normal tracking-[0.015em]">
                    Thông tin
                  </p>
                </button>
                <button
                  onClick={() => setActiveTab("post")}
                  className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#A18249] gap-1 pb-[7px] pt-2.5 flex-1"
                >
                  <p className="text-[#1C160C] text-sm font-bold leading-normal tracking-[0.015em]">
                    Bài viết
                  </p>
                </button>
                <button
                  onClick={() => setActiveTab("active")}
                  className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#A18249] gap-1 pb-[7px] pt-2.5 flex-1"
                >
                  <p className="text-[#A18249] text-sm font-bold leading-normal tracking-[0.015em]">
                    Hoạt động
                  </p>
                </button>
                <button
                  onClick={() => setActiveTab("following")}
                  className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#A18249] gap-1 pb-[7px] pt-2.5 flex-1"
                >
                  <p className="text-[#A18249] text-sm font-bold leading-normal tracking-[0.015em]">
                    Đang theo dõi
                  </p>
                </button>
              </div>
            </div>
            <div className="flex px-4 py-3">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 flex-1 bg-[#019863] text-[#FFFFFF] text-sm font-bold leading-normal tracking-[0.015em]">
                <div className="content">{renderContent()}</div>
              </button>
            </div>
          </div>
          <div className="layout-content-container flex flex-col" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
