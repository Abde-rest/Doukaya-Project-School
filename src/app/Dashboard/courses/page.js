import React from "react";
import Table from "./componet/Table";

const page = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <button className=" flex items-center gap-2 bg-indigo-800 shadow-lg hover:bg-primaryV2 transition text-white px-2 text-sm py-2 rounded-md ">
          اضافة درس
          <svg
            width="15px"
            height="15px"
            viewBox="0 0 24.00 24.00"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#ffffff">
            <g id="SVGRepo_bgCarrier" stroke-width="0" />

            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            />

            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M15 21H9C6.17157 21 4.75736 21 3.87868 20.1213C3 19.2426 3 17.8284 3 15M21 15C21 17.8284 21 19.2426 20.1213 20.1213C19.8215 20.4211 19.4594 20.6186 19 20.7487"
                stroke="#ffffff"
                stroke-width="1.9919999999999998"
                stroke-linecap="round"
                stroke-linejoin="round"
              />{" "}
              <path
                d="M12 16V3M12 3L16 7.375M12 3L8 7.375"
                stroke="#ffffff"
                stroke-width="1.9919999999999998"
                stroke-linecap="round"
                stroke-linejoin="round"
              />{" "}
            </g>
          </svg>
        </button>
        <div>
          <h1 className="font-bold text-base md:text-xl "> لوحة التحكم / الدروس </h1>
          <p className="mt-2 text-sm text-black/80">جميع الدروس الموجودة في الموقع </p>
        </div>
      </div>

      {/* Table  */}
      <Table/>
    </div>
  );
};

export default page;
