// import Table from "./componet/Table";
import ToptextHedingpage from "../coponent/ToptextHedingpage";
import BuutonAdd from "../coponent/BuutonAdd";
import { materialList, ChapterList, NevauxlList } from "./componet/listFilter";
import SerchInput from "./componet/SerchInput";
import TableUsers from "./componet/TableUsers";
import { Suspense } from "react";
import Spinner from "@/app/Componet/spinnerUi/spinner";

const page = async ({ searchParams }) => {
  let Serachquery = searchParams.Search;

  return (
    <div>
      <div className="flex items-center justify-between ">
        {/* open form  and add cours   */}
        <BuutonAdd addText={"درس"} nameFunc={"addLessone"} />
        <div>
          <ToptextHedingpage
            Heding={"الدروس"}
            paragrph={"جميع الدروس الموجودة في الموقع "}
          />
        </div>
      </div>
      <div
        dir="rtl"
        className="bg-white  p-2 md:p-6 rounded-xl shadow-md mt-3   ">
        {/* <!-- Header Section --> */}

        <h1 className="text-3xl font-semibold text-gray-900 text-start mb-4">
          الدروس
        </h1>

        {/* <!-- Search and Filter Section --> */}

        <div className="mb-6 lg:flex items-center justify-between  ">
          <div className=" lg:flex items-center gap-3">
            <SerchInput />
            <div className="flex items-center gap-1 mt-3 mb-3">
              <select className="px-2  w-full lg:w-fit py-1 cursor-pointer border border-gray-300 rounded-md">
                <option hidden>المادة</option>

                {materialList.map((items, index) => {
                  return <option key={index}>{items.nameAr}</option>;
                })}
              </select>

              {/* {nameTable === "الدروس" && ( */}
              <select className="px-2  w-full lg:w-fit py-1 cursor-pointer border border-gray-300 rounded-md">
                <option hidden>المستوى</option>
                {NevauxlList.map((items, index) => {
                  return <option key={index}>{items.nameAr}</option>;
                })}
              </select>
              {/* )} */}

              {/* {nameTable === "الدروس" && ( */}
              <select className="px-2  w-full lg:w-fit py-1 cursor-pointer border border-gray-300 rounded-md">
                <option hidden> الفصل</option>
                {ChapterList.map((items, index) => {
                  return <option key={index}>{items.nameAr}</option>;
                })}
              </select>
              {/* )} */}
            </div>
          </div>

          {/* بنفس فكرة الور لفوق BuutonAdd */}
          <button className=" text-xs w-full  click_button border-none  lg:w-fit  bg-indigo-800 shadow-lg hover:bg-primaryV2 transition text-white px-3 py-2 rounded-md ">
            <div className=" flex items-center gap-2 justify-center">
              {" "}
              <h1> فلتر</h1>
              {/* <svg
                width="20px"
                height="20px"
                className="rounded-full"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_15_152)">
                  <rect width="24" height="24" fill="white" />
                  <circle
                    cx="10.5"
                    cy="10.5"
                    r="6.5"
                    stroke="#000000"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M19.6464 20.3536C19.8417 20.5488 20.1583 20.5488 20.3536 20.3536C20.5488 20.1583 20.5488 19.8417 20.3536 19.6464L19.6464 20.3536ZM20.3536 19.6464L15.3536 14.6464L14.6464 15.3536L19.6464 20.3536L20.3536 19.6464Z"
                    fill="#000000"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_15_152">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg> */}
            </div>
          </button>
        </div>

        {/* <!-- Table Section --> */}
        <Suspense
          fallback={
            <div className="m-auto text-center">
              <Spinner />
            </div>
          }>
          <TableUsers Serachquery={Serachquery} />
        </Suspense>
      </div>
    </div>
  );
};

export default page;
