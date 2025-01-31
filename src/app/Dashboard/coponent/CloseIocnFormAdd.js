"use client";
import StoreFormAdd from "@/store/StoreFormAdd";
import React from "react";
// هاذا زؤ غلق form add الهاص بالاضافة
const CloseIocnFormAdd = () => {
  let { setIsOpen } = StoreFormAdd();
  return (
    <div onClick={() => setIsOpen(false)}>
      <svg
        className="w-9 h-9 cursor-pointer duration-100 hover:w-10 hover:h-10"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="#1C274C" stroke-width="1.5" />
        <path
          d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5"
          stroke="#1C274C"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </svg>
    </div>
  );
};

export default CloseIocnFormAdd;
