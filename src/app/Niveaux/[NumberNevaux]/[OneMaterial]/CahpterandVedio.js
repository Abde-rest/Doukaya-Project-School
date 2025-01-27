"use client";
import React, { useState } from "react";
import LessionOne from "./LessionOne";
import VedioComponet from "./VedioComponet";

const CahpterandVedio = ({ res }) => {
  let [LinkVedioLessonWhenClick, SetLinkVedioLessonWhenClick] = useState(
    res.chapter_1[0].link
  );

  let [currentLesson, setCurrentLesson] = useState(0);

  // let [colorLessonClick, setcolorLessonClick] = useState(true);
  return (
    <div className="flex  flex-col justify-between gap-2 md:flex-row">
      {/* start vedio  */}
      <div className="bg-white shadow-md rounded-b-lg  flex-1 h-fit md:sticky top-0 ">
        <VedioComponet LinkVedioLessonWhenClick={LinkVedioLessonWhenClick} />
        <div className="text-end pt-2 px-2 pb-2">
          <h1>: الوصف</h1>
          <p className="">{res.chapter_1[0].description}</p>
        </div>
        <div className="text-end pt-2 px-2 pb-2">
          <h1>: تمارينات </h1>
        </div>
      </div>

      {/* end vedio  */}

      {/* chapters  and lessons */}
      <div className="rounded  flex-1 ">
        <div className=" shadow-lg  md:sticky top-0">
          {/* chapter 1 */}
          <div>
            <h1 className="text-center bg-primaryV2 py-2 rounded font-bold">
              الفصل الأول
            </h1>
            <div className="max-h-52 overflow-y-scroll ">
              {res.chapter_1.length > 0 ? (
                res.chapter_1.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="bg-primary  max-h-56 overflow-y-scroll">
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
          <div>
            <h1 className="text-center bg-primaryV2 py-2 rounded font-bold">
              الفصل الثاني{" "}
            </h1>
            <div>
              {res.chapter_2.length > 0 ? (
                res.chapter_2.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="bg-primary  max-h-56 overflow-y-scroll">
                      <LessionOne
                        SetLinkVedioLessonWhenClick={
                          SetLinkVedioLessonWhenClick
                        }
                        title={item.title}
                        NumberIndex={index + 1}
                        LinkVedio={item.link}
                      />
                    </div>
                  );
                })
              ) : (
                <div>لايوجد دروس بعد </div>
              )}
            </div>
          </div>

          {/* chapter 3  */}
          <div>
            <h1 className="text-center bg-primaryV2 py-2 rounded font-bold">
              الفصل الثالث{" "}
            </h1>
            <div className=" max-h-56 overflow-y-scroll">
              {res.chapter_3.length > 0 ? (
                res.chapter_3.map((item, index) => {
                  return (
                    <div key={index} className="bg-primary ">
                      <LessionOne
                        SetLinkVedioLessonWhenClick={
                          SetLinkVedioLessonWhenClick
                        }
                        title={item.title}
                        NumberIndex={index + 1}
                        LinkVedio={item.link}
                      />
                    </div>
                  );
                })
              ) : (
                <div className="bg-primary  text-center py-3 ">
                  لايوجد دروس بعد{" "}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CahpterandVedio;
