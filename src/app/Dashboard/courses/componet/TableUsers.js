import React from "react";
import { theadListCourse } from "./ListTableTop";

import ActionsLesson from "./ActionsLesson";
const TableUsers = async ({ Serachquery }) => {
  /// حاول هنا use server action

  // Get data For List Table Lesso
  // قمت هنا في fetch بنزع no store
  // لانه: في عملية اضافة بحث في الحقل ورفعها في serach bar
  // يحدث rendring new in page  بما يتم اعادة جلب الصفحة من جديد مرة اخرى
  // واياضا اعادة جلب البياتات مرة اخرى
  // اي كل حرف تكتبه في البحث يحضر بيانات جديدة مرة اخرى لذالك خونت في الكاش
  // وافضل حل هنا هو استخدام server action
  let data = [];
  try {
    let res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/GetAllChapterAndLesson`,
      {
        method: "POST",
        body: JSON.stringify({
          Serachquery: Serachquery,
        }),
        cache: "no-store",
      }
    );
    if (!res.ok) {
      return <div>حدث خطاء ما</div>;
    }

    data = await res.json();
    console.log(data);
    console.log("Is:");
  } catch (error) {
    console.log(error);
  }

  return (
    <div className="overflow-y-auto max-h-96 md:max-h-60 ">
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
          {data ? (
            data.length > 0 ? (
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
                        <td className="py-2 px-4">{item.time.slice(0, 10)}</td>
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
                            <ActionsLesson
                              id={item._id}
                              idSubject={items._id}
                              chapter={chapterKey}
                            />
                          </button>
                        </td>
                      </tr>
                    ));
                  });
              })
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-4">
                  لاتوجد بيانات
                </td>
              </tr>
            )
          ) : (
            <>لم تاتي بيانات</>
          )}
        </tbody>
      </table>
      {/* </Suspense> */}
    </div>
  );
};

export default TableUsers;
