/** @format */

import React from "react";
import "./Header.scss";
const Header = () => {
  return (
    <>
      <>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com/"
          crossOrigin=""
        />
        <link
          rel="stylesheet"
          as="style"
          onload="this.rel='stylesheet'"
          href="https://fonts.googleapis.com/css2?display=swap&family=Noto+Sans%3Awght%40400%3B500%3B700%3B900&family=Plus+Jakarta+Sans%3Awght%40400%3B500%3B700%3B800"
        />
        <title>Galileo Design</title>
        <link rel="icon" type="image/x-icon" href="data:image/x-icon;base64," />
        <div
          className="relative flex size-full min-h-screen flex-col bg-[#FFFFFF] group/design-root overflow-x-hidden"
          style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
        >
          <div className="layout-container flex h-full grow flex-col sm:px-4 md:px-10">
            <header className="flex items-center justify-between border-b border-solid border-b-[#F4EFE6] px-4 py-2 md:px-10 md:py-3">
              <div className="flex items-center gap-4 text-[#1C160C]">
                <div className="size-4">
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
                <h2 className="text-[#1C160C] text-lg font-bold leading-tight tracking-[-0.015em]">
                  monfansub
                </h2>
              </div>
              <div className="flex flex-1 justify-end gap-8">
                <div className="flex gap-2">
                  <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 bg-[#F4EFE6] text-[#1C160C] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
                    <div
                      className="text-[#1C160C]"
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
                  <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 bg-[#F4EFE6] text-[#1C160C] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
                    <div
                      className="text-[#1C160C]"
                      data-icon="User"
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
                        <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z" />
                      </svg>
                    </div>
                  </button>
                </div>
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                  style={{
                    backgroundImage:
                      'url("https://cdn.usegalileo.ai/sdxl10/3626cf3a-8bcf-4b43-999a-f401d2f88b55.png")',
                  }}
                />
              </div>
            </header>
            <div className="gap-1 px-6 flex flex-1 justify-center py-5">
              <div className="layout-content-container flex flex-col w-80">
                <div className="flex h-full min-h-[700px] flex-col justify-between bg-[#FFFFFF] p-4">
                  <div className="flex flex-col gap-4">
                    <div className="flex gap-3">
                      <div
                        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                        style={{
                          backgroundImage:
                            'url("https://cdn.usegalileo.ai/sdxl10/ddc53f3b-6fab-4666-b0df-9e034e40d041.png")',
                        }}
                      />
                      <h1 className="text-[#1C160C] text-base font-medium leading-normal">
                        Hung Do
                      </h1>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-3 px-3 py-2 rounded-full bg-[#F4EFE6]">
                        <div
                          className="text-[#1C160C]"
                          data-icon="House"
                          data-size="24px"
                          data-weight="fill"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24px"
                            height="24px"
                            fill="currentColor"
                            viewBox="0 0 256 256"
                          >
                            <path d="M224,115.55V208a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48.11-.11a16,16,0,0,1,21.53,0,1.14,1.14,0,0,0,.11.11l80,75.48A16,16,0,0,1,224,115.55Z" />
                          </svg>
                        </div>
                        <p className="text-[#1C160C] text-sm font-medium leading-normal">
                          Mới nhất
                        </p>
                      </div>
                      <div className="flex items-center gap-3 px-3 py-2">
                        <div
                          className="text-[#1C160C]"
                          data-icon="Unite"
                          data-size="24px"
                          data-weight="regular"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24px"
                            height="24px"
                            fill="currentColor"
                            viewBox="0 0 256 256"
                          >
                            <path d="M174.63,81.37a80,80,0,1,0-93.26,93.26,80,80,0,1,0,93.26-93.26ZM224,160c0,1.52-.07,3-.18,4.51l-50-50A80,80,0,0,0,176,98,64.11,64.11,0,0,1,224,160ZM45.47,56.79,98.09,109.4a80.5,80.5,0,0,0-9.93,15.44L36.3,73A64,64,0,0,1,45.47,56.79ZM73,36.3l51.86,51.86a80.5,80.5,0,0,0-15.44,9.93L56.79,45.47A64,64,0,0,1,73,36.3Zm61.46,110.83-25.57-25.57a64.65,64.65,0,0,1,12.69-12.69l25.57,25.57A64.65,64.65,0,0,1,134.44,147.13ZM155.31,120,136,100.69A63.48,63.48,0,0,1,160,96,63.48,63.48,0,0,1,155.31,120Zm-54.62,16L120,155.31A63.48,63.48,0,0,1,96,160,63.48,63.48,0,0,1,100.69,136Zm45.91,21.91,52.61,52.62A64,64,0,0,1,183,219.7l-51.86-51.86A80.5,80.5,0,0,0,146.6,157.91Zm11.31-11.31a80.5,80.5,0,0,0,9.93-15.44L219.7,183a64,64,0,0,1-9.17,16.19ZM158,80.05a80,80,0,0,0-16.49,2.13l-50-50C93,32.07,94.48,32,96,32A64.11,64.11,0,0,1,158,80.05ZM32,96c0-1.52.07-3,.18-4.51l50,50A80,80,0,0,0,80.05,158,64.11,64.11,0,0,1,32,96ZM98,176a80,80,0,0,0,16.49-2.13l50,50c-1.49.11-3,.18-4.51.18A64.11,64.11,0,0,1,98,176Z" />
                          </svg>
                        </div>
                        <p className="text-[#1C160C] text-sm font-medium leading-normal">
                          Đang theo dõi
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                <div className="flex items-center gap-4 bg-[#FFFFFF] px-4 min-h-[72px] py-2 justify-between">
                  <div className="flex items-center gap-4">
                    <div
                      className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-fit"
                      style={{
                        backgroundImage:
                          'url("https://cdn.usegalileo.ai/sdxl10/7c7c80d3-64e4-49bc-9b24-b7b552fcda58.png")',
                      }}
                    />
                    <div className="flex flex-col justify-center">
                      <p className="text-[#1C160C] text-base font-medium leading-normal line-clamp-1">
                        Doraemon-nian
                      </p>
                      <p className="text-[#A18249] text-sm font-normal leading-normal line-clamp-2">
                        Nhân vật vip nhất phim
                      </p>
                    </div>
                  </div>
                  <div className="shrink-0">
                    <div
                      className="text-[#1C160C] flex size-7 items-center justify-center"
                      data-icon="DotsThree"
                      data-size="24px"
                      data-weight="regular"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm56-12a12,12,0,1,0,12,12A12,12,0,0,0,196,116ZM60,116a12,12,0,1,0,12,12A12,12,0,0,0,60,116Z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex w-full grow bg-[#FFFFFF] @container py-3">
                  <div className="w-full gap-1 overflow-hidden bg-[#FFFFFF] @[480px]:gap-2 aspect-[3/2] flex">
                    <div
                      className="w-full bg-center bg-no-repeat bg-cover aspect-auto rounded-none flex-1"
                      style={{
                        backgroundImage:
                          'url("https://cdn.usegalileo.ai/sdxl10/28e839d6-c0a1-442b-92c0-87b3018a90ce.png")',
                      }}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 px-4 py-2 py-2 justify-between">
                  <div className="flex items-center justify-center gap-2 px-3 py-2">
                    <div
                      className="text-[#A18249]"
                      data-icon="Heart"
                      data-size="24px"
                      data-weight="regular"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M178,32c-20.65,0-38.73,8.88-50,23.89C116.73,40.88,98.65,32,78,32A62.07,62.07,0,0,0,16,94c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,220.66,240,164,240,94A62.07,62.07,0,0,0,178,32ZM128,206.8C109.74,196.16,32,147.69,32,94A46.06,46.06,0,0,1,78,48c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,147.61,146.24,196.15,128,206.8Z" />
                      </svg>
                    </div>
                    <p className="text-[#A18249] text-[13px] font-bold leading-normal tracking-[0.015em]">
                      2
                    </p>
                  </div>
                  <div className="flex items-center justify-center gap-2 px-3 py-2">
                    <div
                      className="text-[#A18249]"
                      data-icon="ChatTeardropText"
                      data-size="24px"
                      data-weight="regular"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M168,112a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,112Zm-8,24H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Zm72-12A100.11,100.11,0,0,1,132,224H47.67A15.69,15.69,0,0,1,32,208.33V124a100,100,0,0,1,200,0Zm-16,0a84,84,0,0,0-168,0v84h84A84.09,84.09,0,0,0,216,124Z" />
                      </svg>
                    </div>
                    <p className="text-[#A18249] text-[13px] font-bold leading-normal tracking-[0.015em]">
                      0
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-[#FFFFFF] px-4 min-h-[72px] py-2 justify-between">
                  <div className="flex items-center gap-4">
                    <div
                      className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-fit"
                      style={{
                        backgroundImage:
                          'url("https://cdn.usegalileo.ai/sdxl10/d563d1c3-252d-4895-b186-8cb8f116c6a2.png")',
                      }}
                    />
                    <div className="flex flex-col justify-center">
                      <p className="text-[#1C160C] text-base font-medium leading-normal line-clamp-1">
                        Bà Tưng Lê
                      </p>
                      <p className="text-[#A18249] text-sm font-normal leading-normal line-clamp-2">
                        Cảm ơn ghê ghớm
                      </p>
                    </div>
                  </div>
                  <div className="shrink-0">
                    <div
                      className="text-[#1C160C] flex size-7 items-center justify-center"
                      data-icon="DotsThree"
                      data-size="24px"
                      data-weight="regular"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm56-12a12,12,0,1,0,12,12A12,12,0,0,0,196,116ZM60,116a12,12,0,1,0,12,12A12,12,0,0,0,60,116Z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex w-full grow bg-[#FFFFFF] @container py-3">
                  <div className="w-full gap-1 overflow-hidden bg-[#FFFFFF] @[480px]:gap-2 aspect-[3/2] flex">
                    <div
                      className="w-full bg-center bg-no-repeat bg-cover aspect-auto rounded-none flex-1"
                      style={{
                        backgroundImage:
                          'url("https://cdn.usegalileo.ai/sdxl10/19a584de-0039-4610-9ffb-6464dc55bcfa.png")',
                      }}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 px-4 py-2 py-2 justify-between">
                  <div className="flex items-center justify-center gap-2 px-3 py-2">
                    <div
                      className="text-[#A18249]"
                      data-icon="Heart"
                      data-size="24px"
                      data-weight="regular"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M178,32c-20.65,0-38.73,8.88-50,23.89C116.73,40.88,98.65,32,78,32A62.07,62.07,0,0,0,16,94c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,220.66,240,164,240,94A62.07,62.07,0,0,0,178,32ZM128,206.8C109.74,196.16,32,147.69,32,94A46.06,46.06,0,0,1,78,48c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,147.61,146.24,196.15,128,206.8Z" />
                      </svg>
                    </div>
                    <p className="text-[#A18249] text-[13px] font-bold leading-normal tracking-[0.015em]">
                      0
                    </p>
                  </div>
                  <div className="flex items-center justify-center gap-2 px-3 py-2">
                    <div
                      className="text-[#A18249]"
                      data-icon="ChatTeardropText"
                      data-size="24px"
                      data-weight="regular"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M168,112a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,112Zm-8,24H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Zm72-12A100.11,100.11,0,0,1,132,224H47.67A15.69,15.69,0,0,1,32,208.33V124a100,100,0,0,1,200,0Zm-16,0a84,84,0,0,0-168,0v84h84A84.09,84.09,0,0,0,216,124Z" />
                      </svg>
                    </div>
                    <p className="text-[#A18249] text-[13px] font-bold leading-normal tracking-[0.015em]">
                      0
                    </p>
                  </div>
                </div>
              </div>
              <div className="layout-content-container flex flex-col" />
              <div className="layout-content-container flex flex-col">
                <div className="flex justify-center">
                  <div className="flex flex-1 gap-3 max-w-[480px] flex-col items-stretch px-4 py-3">
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#019863] text-[#FFFFFF] text-sm font-bold leading-normal tracking-[0.015em] w-full">
                      <span className="truncate">Tạo bài viết</span>
                    </button>
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#F4EFE6] text-[#1C160C] text-sm font-bold leading-normal tracking-[0.015em] w-full">
                      <span className="truncate">Truy cập ngay</span>
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-stretch justify-between gap-4 rounded-xl">
                    <div className="flex flex-[2_2_0px] flex-col gap-4">
                      <div className="flex flex-col gap-1">
                        <p className="text-[#1C160C] text-base font-bold leading-tight">
                          DoraWatch™
                        </p>
                        <p className="text-[#A18249] text-sm font-normal leading-normal">
                          Xem toàn bộ nội dung!
                        </p>
                      </div>
                      <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 flex-row-reverse bg-[#F4EFE6] text-[#1C160C] text-sm font-medium leading-normal w-fit">
                        <span className="truncate">Truy cập ngay</span>
                      </button>
                    </div>
                    <div
                      className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                      style={{
                        backgroundImage:
                          'url("https://cdn.usegalileo.ai/sdxl10/627f274d-1029-430c-931e-229a34dd4f3e.png")',
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Header;
