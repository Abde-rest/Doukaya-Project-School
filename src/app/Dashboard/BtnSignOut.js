"use client";
import { signOut } from "next-auth/react";
import React from "react";

const BtnSignOut = () => {
  return (
    <li
      onClick={() => signOut()}
      className="p-2  hover:bg-red-400/70 flex items-center  justify-end  transition cursor-pointer">
      <span className="hidden md:block ">تسجيل الخروج </span>
      <svg
        className="shrink-0 w-5 h-5 ms-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 18 16">
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
        />
      </svg>
    </li>
  );
};

export default BtnSignOut;
