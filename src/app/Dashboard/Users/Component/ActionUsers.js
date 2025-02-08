"use client";
import React from "react";
import DeletUers from "../Actions/DeletUers";

const ActionUsers = (id) => {
  return (
    <div className="group-hover:top-1/2 z-50 left-6 -translate-y-1/2 group-hover:opacity-100 opacity-0 transition-all duration-300 top-12 group-hover:block absolute bg-slate-100 shadow-md rounded-md">
      <span className="px-4 py-2 block hover:bg-blue-300">تعديل</span>
      <span
        className="px-4 py-2 block hover:bg-red-400"
        onClick={() => DeletUers(id)}>
        حذف
      </span>
    </div>
  );
};

export default ActionUsers;
