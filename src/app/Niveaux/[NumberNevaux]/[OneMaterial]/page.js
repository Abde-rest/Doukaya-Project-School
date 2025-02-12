import React, { Suspense } from "react";
import Spinner from "@/app/Componet/spinnerUi/spinner";
import CahpterandVedio from "./CahpterandVedio";
import Image from "next/image";
import Error from "../error";
import NotFoundContent from "../../Componet/HandelingError/NotFoundContent";

// اضافة زر العودة
const page = async ({ params }) => {
  // صفحة الدروس الخاصة بالمادة
  // هنا نحضر الدروس الخاصة بالمادة وبرما ايضا التمارينات
  let { OneMaterial, NumberNevaux } = params;

  // ISR : مسبقا   OneMaterial, NumberNevaux  لا استطيع اضافتها يجب على معرفة

  let res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/GetChaptersAndLesson`,
    {
      method: "POST",
      cache: "no-store",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        NumberNevaux: `${NumberNevaux}`,
        OneMaterial: `${OneMaterial}`,
      }),
    }
  );

  res = await res.json();
  console.log(res);

  return (
    <div className="mt-8 px-3 m-auto  ">
      <Suspense
        fallback={
          <div className=" block text-center m-auto ">
            <Spinner></Spinner>
          </div>
        }>
        {/* Res => " null " Is : الملف غير موجود في الاستجابة اي انك اضافته في قاعدة البيانات   */}

        {res?.chapter_1.length > 0 ||
        res?.chapter_2.length > 0 ||
        res?.chapter_3.length > 0 ? (
          <CahpterandVedio res={res} />
        ) : (
          <NotFoundContent />
        )}
      </Suspense>
    </div>
  );
};

export default page;
