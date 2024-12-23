import Link from "next/link";
import React from "react";

const BtnLinkCorseNow = () => {
  return (
    <Link
      // ml-auto
      href={"#"}
      className="flex gap-1 overflow-hidden m-auto mb-3
       hover:bg-black/70 items-center w-fit px-3 py-2 text-sm font-medium  text-white bg-black rounded-lg relative  button_Effect    ">
      <svg
        className="rtl:rotate-180 w-3.5 h-3.5 "
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M19 12H5M5 12L12 19M5 12L12 5"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      أدرس الأن
    </Link>
  );
};

export default BtnLinkCorseNow;
