/** @format */

import React from "react";

const SearchLastName = () => {
  return (
    <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
      <label className="flex flex-col min-w-40 flex-1">
        <p className="text-[#1C160C] text-base font-medium leading-normal pb-2">
          Search Last Name
        </p>
        <div className="flex w-full flex-1 items-stretch rounded-xl">
          <input
            placeholder="Enter last name"
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1C160C] focus:outline-0 focus:ring-0 border border-[#E9DFCE] bg-[#FFFFFF] focus:border-[#E9DFCE] h-14 placeholder:text-[#A18249] p-[15px] rounded-r-none border-r-0 pr-2 text-base font-normal leading-normal"
            defaultValue=""
          />
          <div className="text-[#A18249] flex border border-[#E9DFCE] bg-[#FFFFFF] items-center justify-center pr-[15px] rounded-r-xl border-l-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
            </svg>
          </div>
        </div>
      </label>
    </div>
  );
};

export default SearchLastName;
