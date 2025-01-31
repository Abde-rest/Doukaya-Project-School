import React from "react";

const Table = ({
  nameTable,
  SelectFixedOne,
  SelectFixedTwo,
  ListFilterOne,
  ListFilterTwo,
  ListFilterThree,
  theadListTopTable,
}) => {
  return (
    <div dir="rtl" className="bg-white  p-2 md:p-6 rounded-xl shadow-md mt-3  ">
      {/* <!-- Header Section --> */}

      <h1 className="text-3xl font-semibold text-gray-900 text-start mb-4">
        {nameTable}
      </h1>

      {/* <!-- Search and Filter Section --> */}

      <div className="mb-6 lg:flex items-center justify-between  ">
        <div className=" lg:flex items-center gap-3">
          <div className="relative">
            <input
              type="text"
              placeholder="أبحث هنا  "
              className="p-2 border border-gray-300 rounded-md w-full pr-9"
            />
            {/* icons Serach  */}
            <svg
              className="absolute top-1/2 -translate-y-1/2 right-3"
              width="20px"
              height="20px"
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
            </svg>
          </div>
          <div className="flex items-center gap-1 mt-3 mb-3">
            <select className="px-2  w-full lg:w-fit py-1 cursor-pointer border border-gray-300 rounded-md">
              <option hidden>{SelectFixedOne}</option>

              {ListFilterOne.map((items, index) => {
                return <option key={index}>{items.nameAr}</option>;
              })}
            </select>

            {nameTable === "الدروس" && (
              <select className="px-2  w-full lg:w-fit py-1 cursor-pointer border border-gray-300 rounded-md">
                <option hidden>{SelectFixedTwo}</option>
                {ListFilterThree.map((items, index) => {
                  return <option key={index}>{items.nameAr}</option>;
                })}
              </select>
            )}

            {nameTable === "الدروس" && (
              <select className="px-2  w-full lg:w-fit py-1 cursor-pointer border border-gray-300 rounded-md">
                <option hidden> الفصل</option>
                {ListFilterTwo.map((items, index) => {
                  return <option key={index}>{items.nameAr}</option>;
                })}
              </select>
            )}
          </div>
        </div>

        {/* بنفس فكرة الور لفوق BuutonAdd */}
        <button className=" text-xs w-full  click_button border-none  lg:w-fit  bg-indigo-800 shadow-lg hover:bg-primaryV2 transition text-white px-3 py-2 rounded-md ">
          <div className=" flex items-center gap-2 justify-center">
            {" "}
            <h1> بحث</h1>
            <svg
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
            </svg>
          </div>
        </button>
      </div>

      {/* <!-- Table Section --> */}
      <div className="max-h-96 overflow-y-auto">
        <table className="w-full" style={{ minWidth: "600px" }}>
          {" "}
          <thead className=" text-gray-700  sticky top-0 ">
            <tr className="text-start w-full bg-slate-50">
              {theadListTopTable.map((item, index) => {
                return (
                  <th key={index} className="py-2 px-4  text-start">
                    {item}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody className="text-start">
            <tr className="border-t hover:bg-slate-50 cursor-pointer">
              <td className="py-2 px-4">الأعداد المركبة وشرح مفهومها </td>
              <td className="py-2 px-4">1</td>
              <td className="py-2 px-4">الرياضيات</td>
              <td className="py-2 px-4">سنة اولى</td>
              <td className="py-2 px-4">2025/1/30</td>
              <td className="py-2 px-4">
                <button className="hover:bg-blue-200  group  py-1 px-1 rounded transition relative ">
                  <svg
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    fill="#000000"
                    xmlns="http://www.w3.org/2000/svg">
                    <title />

                    <g id="Complete">
                      <g id="F-More">
                        <path
                          d="M8,12a2,2,0,1,1-2-2A2,2,0,0,1,8,12Zm10-2a2,2,0,1,0,2,2A2,2,0,0,0,18,10Zm-6,0a2,2,0,1,0,2,2A2,2,0,0,0,12,10Z"
                          id="Horizontal"
                        />
                      </g>
                    </g>
                  </svg>
                  <div className="group-hover:top-1/2 left-6 -translate-y-1/2 group-hover:opacity-100  opacity-0 transition-all duration-300   top-12  group-hover:block  absolute bg-slate-100 shadow-md rounded-md ">
                    <span className="px-4 py-2 block hover:bg-blue-300">
                      تعديل{" "}
                    </span>
                    <span className="px-4 py-2 block hover:bg-red-400">
                      حذف
                    </span>
                  </div>
                </button>
              </td>
            </tr>
            <tr className="border-t hover:bg-slate-50 cursor-pointer">
              <td className="py-2 px-4">الأعداد المركبة وشرح مفهومها </td>
              <td className="py-2 px-4">1</td>
              <td className="py-2 px-4">الرياضيات</td>
              <td className="py-2 px-4">سنة اولى</td>
              <td className="py-2 px-4">2025/1/30</td>
              <td className="py-2 px-4">
                <button className="hover:bg-blue-200  group  py-1 px-1 rounded transition relative ">
                  <svg
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    fill="#000000"
                    xmlns="http://www.w3.org/2000/svg">
                    <title />

                    <g id="Complete">
                      <g id="F-More">
                        <path
                          d="M8,12a2,2,0,1,1-2-2A2,2,0,0,1,8,12Zm10-2a2,2,0,1,0,2,2A2,2,0,0,0,18,10Zm-6,0a2,2,0,1,0,2,2A2,2,0,0,0,12,10Z"
                          id="Horizontal"
                        />
                      </g>
                    </g>
                  </svg>
                  <div className="group-hover:top-1/2 left-6 -translate-y-1/2 group-hover:opacity-100  opacity-0 transition-all duration-300   top-12  group-hover:block  absolute bg-slate-100 shadow-md rounded-md ">
                    <span className="px-4 py-2 block hover:bg-blue-300">
                      تعديل{" "}
                    </span>
                    <span className="px-4 py-2 block hover:bg-red-400">
                      حذف
                    </span>
                  </div>
                </button>
              </td>
            </tr>
            <tr className="border-t hover:bg-slate-50 cursor-pointer">
              <td className="py-2 px-4">الأعداد المركبة وشرح مفهومها </td>
              <td className="py-2 px-4">1</td>
              <td className="py-2 px-4">الرياضيات</td>
              <td className="py-2 px-4">سنة اولى</td>
              <td className="py-2 px-4">2025/1/30</td>
              <td className="py-2 px-4">
                <button className="hover:bg-blue-200  group  py-1 px-1 rounded transition relative ">
                  <svg
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    fill="#000000"
                    xmlns="http://www.w3.org/2000/svg">
                    <title />

                    <g id="Complete">
                      <g id="F-More">
                        <path
                          d="M8,12a2,2,0,1,1-2-2A2,2,0,0,1,8,12Zm10-2a2,2,0,1,0,2,2A2,2,0,0,0,18,10Zm-6,0a2,2,0,1,0,2,2A2,2,0,0,0,12,10Z"
                          id="Horizontal"
                        />
                      </g>
                    </g>
                  </svg>
                  <div className="group-hover:top-1/2 left-6 -translate-y-1/2 group-hover:opacity-100  opacity-0 transition-all duration-300   top-12  group-hover:block  absolute bg-slate-100 shadow-md rounded-md ">
                    <span className="px-4 py-2 block hover:bg-blue-300">
                      تعديل{" "}
                    </span>
                    <span className="px-4 py-2 block hover:bg-red-400">
                      حذف
                    </span>
                  </div>
                </button>
              </td>
            </tr>
            <tr className="border-t hover:bg-slate-50 cursor-pointer">
              <td className="py-2 px-4">الأعداد المركبة وشرح مفهومها </td>
              <td className="py-2 px-4">1</td>
              <td className="py-2 px-4">الرياضيات</td>
              <td className="py-2 px-4">سنة اولى</td>
              <td className="py-2 px-4">2025/1/30</td>
              <td className="py-2 px-4">
                <button className="hover:bg-blue-200  group  py-1 px-1 rounded transition relative ">
                  <svg
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    fill="#000000"
                    xmlns="http://www.w3.org/2000/svg">
                    <title />

                    <g id="Complete">
                      <g id="F-More">
                        <path
                          d="M8,12a2,2,0,1,1-2-2A2,2,0,0,1,8,12Zm10-2a2,2,0,1,0,2,2A2,2,0,0,0,18,10Zm-6,0a2,2,0,1,0,2,2A2,2,0,0,0,12,10Z"
                          id="Horizontal"
                        />
                      </g>
                    </g>
                  </svg>
                  <div className="group-hover:top-1/2 left-6 -translate-y-1/2 group-hover:opacity-100  opacity-0 transition-all duration-300   top-12  group-hover:block  absolute bg-slate-100 shadow-md rounded-md ">
                    <span className="px-4 py-2 block hover:bg-blue-300">
                      تعديل{" "}
                    </span>
                    <span className="px-4 py-2 block hover:bg-red-400">
                      حذف
                    </span>
                  </div>
                </button>
              </td>
            </tr>
            <tr className="border-t hover:bg-slate-50 cursor-pointer">
              <td className="py-2 px-4">الأعداد المركبة وشرح مفهومها </td>
              <td className="py-2 px-4">1</td>
              <td className="py-2 px-4">الرياضيات</td>
              <td className="py-2 px-4">سنة اولى</td>
              <td className="py-2 px-4">2025/1/30</td>
              <td className="py-2 px-4">
                <button className="hover:bg-blue-200  group  py-1 px-1 rounded transition relative ">
                  <svg
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    fill="#000000"
                    xmlns="http://www.w3.org/2000/svg">
                    <title />

                    <g id="Complete">
                      <g id="F-More">
                        <path
                          d="M8,12a2,2,0,1,1-2-2A2,2,0,0,1,8,12Zm10-2a2,2,0,1,0,2,2A2,2,0,0,0,18,10Zm-6,0a2,2,0,1,0,2,2A2,2,0,0,0,12,10Z"
                          id="Horizontal"
                        />
                      </g>
                    </g>
                  </svg>
                  <div className="group-hover:top-1/2 left-6 -translate-y-1/2 group-hover:opacity-100  opacity-0 transition-all duration-300   top-12  group-hover:block  absolute bg-slate-100 shadow-md rounded-md ">
                    <span className="px-4 py-2 block hover:bg-blue-300">
                      تعديل{" "}
                    </span>
                    <span className="px-4 py-2 block hover:bg-red-400">
                      حذف
                    </span>
                  </div>
                </button>
              </td>
            </tr>
            <tr className="border-t hover:bg-slate-50 cursor-pointer">
              <td className="py-2 px-4">الأعداد المركبة وشرح مفهومها </td>
              <td className="py-2 px-4">1</td>
              <td className="py-2 px-4">الرياضيات</td>
              <td className="py-2 px-4">سنة اولى</td>
              <td className="py-2 px-4">2025/1/30</td>
              <td className="py-2 px-4">
                <button className="hover:bg-blue-200  group  py-1 px-1 rounded transition relative ">
                  <svg
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    fill="#000000"
                    xmlns="http://www.w3.org/2000/svg">
                    <title />

                    <g id="Complete">
                      <g id="F-More">
                        <path
                          d="M8,12a2,2,0,1,1-2-2A2,2,0,0,1,8,12Zm10-2a2,2,0,1,0,2,2A2,2,0,0,0,18,10Zm-6,0a2,2,0,1,0,2,2A2,2,0,0,0,12,10Z"
                          id="Horizontal"
                        />
                      </g>
                    </g>
                  </svg>
                  <div className="group-hover:top-1/2 left-6 -translate-y-1/2 group-hover:opacity-100  opacity-0 transition-all duration-300   top-12  group-hover:block  absolute bg-slate-100 shadow-md rounded-md ">
                    <span className="px-4 py-2 block hover:bg-blue-300">
                      تعديل{" "}
                    </span>
                    <span className="px-4 py-2 block hover:bg-red-400">
                      حذف
                    </span>
                  </div>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
