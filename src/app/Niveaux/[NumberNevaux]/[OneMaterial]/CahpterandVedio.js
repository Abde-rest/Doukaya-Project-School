"use client";
import React, { useState } from "react";
import LessionOne from "./LessionOne";
import VedioComponet from "./VedioComponet";

const CahpterandVedio = ({ res }) => {
  let [LinkVedioLessonWhenClick, SetLinkVedioLessonWhenClick] = useState(
    res.chapter_1[0].link
  );

  return (
    <div className="flex  flex-col-reverse justify-between  lg:flex-row relative top-0 gap-5 left-0 w-full">
      {/* chapters  and lessons */}
      <div className="rounded  lg:w-1/3 ">
        <div className=" shadow-lg  lg:sticky top-0">
          {/* chapter 1 */}
          <div className="mb-2">
            <div className="bg-[#f7bc4b] text-[#334457] px-4 py-3 rounded-t-lg">
              <h3 className="font-bold text-center">الفصل الأول</h3>
            </div>
            <div className="max-h-52 overflow-y-scroll   ">
              {res.chapter_1.length > 0 ? (
                res.chapter_1.map((item, index) => {
                  return (
                    <div key={index} className=" max-h-56 overflow-y-scroll">
                      <div
                        onClick={() => {
                          SetLinkVedioLessonWhenClick(item.link);
                        }}>
                        <LessionOne
                          title={item.title}
                          NumberIndex={index + 1}
                        />
                      </div>
                    </div>
                  );
                })
              ) : (
                <div>لايوجد دروس بعد </div>
              )}
            </div>
          </div>
          {/* chapter 2 */}
          {/* chapter 1 */}
          <div className="mb-2">
            <div className="bg-[#f7bc4b] text-[#334457] px-4 py-3 ">
              <h3 className="font-bold text-center">الفصل الثاني</h3>
            </div>
            <div className="max-h-52 overflow-y-scroll   ">
              {res.chapter_2.length > 0 ? (
                res.chapter_2.map((item, index) => {
                  return (
                    <div key={index} className=" max-h-56 overflow-y-scroll">
                      <div
                        onClick={() => {
                          SetLinkVedioLessonWhenClick(item.link);
                        }}>
                        <LessionOne
                          title={item.title}
                          NumberIndex={index + 1}
                        />
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="text-center p-2">لايوجد دروس بعد </div>
              )}
            </div>
          </div>
          {/* chapter 3  */}{" "}
          <div className="mb-2">
            <div className="bg-[#f7bc4b] text-[#334457] px-4 py-3 ">
              <h3 className="font-bold text-center">الفصل الثالث</h3>
            </div>
            <div className="max-h-52 overflow-y-scroll   ">
              {res.chapter_3.length > 0 ? (
                res.chapter_3.map((item, index) => {
                  return (
                    <div key={index} className=" max-h-56 overflow-y-scroll">
                      <div
                        onClick={() => {
                          SetLinkVedioLessonWhenClick(item.link);
                        }}>
                        <LessionOne
                          title={item.title}
                          NumberIndex={index + 1}
                        />
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="text-center p-2">لايوجد دروس بعد </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* start vedio  */}
      <div className="  rounded-b-lg lg:w-2/3 h-fit lg:sticky top-0 rounded-xl overflow-hidden ">
        <VedioComponet LinkVedioLessonWhenClick={LinkVedioLessonWhenClick} />
        <div className=" mt-7 bg-[#F4F4F5] rounded-md flex items-center justify-around">
          <div className="text-end pt-2 px-2 pb-2 flex-1  ">
            <h1 className="text-center font-semibold py-1 "> الوصف</h1>
            {/* <p className="">{res.chapter_1[0].description}</p> */}
          </div>
          <div className="text-end pt-2 px-2 pb-2  flex-1 hover:bg-black/5 cursor-pointer">
            <h1 className="text-center font-semibold py-1 ">تمارينات </h1>
          </div>
        </div>
        {/* Content  */}
        <div className="text-end mt-2 mb-3">
          <h2 className="text-xl font-bold mb-4">عملية بيع القسط</h2>
          <p className="text-[#33445799] leading-relaxed">
            في هذا الدرس سنتعلم عن عملية بيع القسط وكيفية تطبيقها في الحياة
            العملية. سنتعرف على المفاهيم الأساسية والخطوات المهمة في هذه
            العملية.
          </p>
        </div>
      </div>
      {/* end vedio  */}
    </div>
  );
};

export default CahpterandVedio;
