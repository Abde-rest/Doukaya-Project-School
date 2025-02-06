// import Table from "./componet/Table";
import ToptextHedingpage from "../coponent/ToptextHedingpage";
import BuutonAdd from "../coponent/BuutonAdd";
import { materialList, ChapterList, NevauxlList } from "./componet/listFilter";
import { theadListCourse } from "./componet/ListTableTop";

const page = async () => {
  // Get data For List Table Lesson
  let data = [];
  try {
    let res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/GetAllChapterAndLesson`,

      // { headers: { "Cache-Control": "no-cache, no-store, must-revalidate" } },
      { cache: "no-store" }
    );
    if (!res.ok) {
      throw new Error("فشل جلب البيانات");
    }
    data = await res.json();
  } catch (error) {
    return <div>فشل جلب البيانات جدث خطاء ما </div>;
  }

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

      {/* Table  */}
      {/* <Table
        nameTable={"الدروس"}
        // ااسم الفيلتر
        SelectFixedOne={"المادة "}
        SelectFixedTwo={"المستوى"}
        // المعطيات داخل الفيلتر
        ListFilterOne={materialList}
        ListFilterTwo={ChapterList}
        ListFilterThree={NevauxlList}
        theadListTopTable={theadListCourse}
      /> */}
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
        <div className="overflow-y-auto max-h-64">
          {/* <Skeleton count={3} className="w-full h-12" /> */}
          {/* <Suspense fallback={<Skeleton count={3} className="w-full h-12" />}> */}
          <table className="w-full" style={{ minWidth: "600px" }}>
            {" "}
            <thead className=" text-gray-700  sticky top-0 z-30 ">
              <tr className="text-start w-full bg-slate-50">
                {theadListCourse.map((item, index) => {
                  return (
                    <th key={index} className="py-2 px-4  text-start">
                      {item}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody className="text-start h-fit">
              {/* <Suspense fallback={<Skeleton count={3} className="w-full h-12" />}> */}
              {data.length > 0 ? (
                data.map((items, index) => {
                  return Object.keys(items) // استخراج جميع المفاتيح
                    .filter((key) => key.startsWith("chapter_")) // تصفية الفصول فقط
                    .flatMap((chapterKey, chapterIndex) => {
                      return items[chapterKey].map((item, itemIndex) => (
                        <tr
                          key={`${index}-${chapterIndex}-${itemIndex}`}
                          className="border-t hover:bg-slate-50 cursor-pointer">
                          <td className="py-2 px-4">
                            {item.title.length > 30
                              ? item.title.slice(0, 30) + "..."
                              : item.title}
                          </td>
                          <td className="py-2 px-4">
                            {chapterKey.replace("chapter_", "")}
                          </td>
                          <td className="py-2 px-4">{items.name}</td>
                          <td className="py-2 px-4">{items.level_id}</td>
                          <td className="py-2 px-4">
                            {item.time.slice(0, 10)}
                          </td>
                          <td className="py-2 px-4">
                            <button className="hover:bg-blue-200 group py-1 px-1 rounded transition relative">
                              <svg
                                width="20px"
                                height="20px"
                                viewBox="0 0 24 24"
                                fill="#000000"
                                xmlns="http://www.w3.org/2000/svg">
                                <g id="Complete">
                                  <g id="F-More">
                                    <path
                                      d="M8,12a2,2,0,1,1-2-2A2,2,0,0,1,8,12Zm10-2a2,2,0,1,0,2,2A2,2,0,0,0,18,10Zm-6,0a2,2,0,1,0,2,2A2,2,0,0,0,12,10Z"
                                      id="Horizontal"
                                    />
                                  </g>
                                </g>
                              </svg>
                              <div className="group-hover:top-1/2 z-50 left-6 -translate-y-1/2 group-hover:opacity-100 opacity-0 transition-all duration-300 top-12 group-hover:block absolute bg-slate-100 shadow-md rounded-md">
                                <span className="px-4 py-2 block hover:bg-blue-300">
                                  تعديل
                                </span>
                                <span className="px-4 py-2 block hover:bg-red-400">
                                  حذف
                                </span>
                              </div>
                            </button>
                          </td>
                        </tr>
                      ));
                    });
                })
              ) : (
                <tr>
                  <td colSpan="6" className="text-center py-4">
                    data مازالت لم تاتي
                  </td>
                </tr>
              )}
              {/* </Suspense> */}
            </tbody>
          </table>
          {/* </Suspense> */}
        </div>
      </div>
    </div>
  );
};

export default page;
