/** @format */

import React from "react";

const Pagination = () => {
  return (
    <div className="flex items-center justify-center p-4">
      <a href="#" className="flex size-10 items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18px"
          height="18px"
          fill="currentColor"
          viewBox="0 0 256 256"
        >
          <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z" />
        </svg>
      </a>
      <a className="text-sm font-bold leading-normal text-[#1C160C] bg-[#F4EFE6]">
        1
      </a>
      <a className="text-sm font-normal">2</a>
    </div>
  );
};

export default Pagination;
