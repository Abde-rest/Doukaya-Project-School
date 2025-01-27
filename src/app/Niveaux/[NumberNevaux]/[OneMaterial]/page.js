import React, { Suspense } from "react";
import Spinner from "@/app/Componet/spinnerUi/spinner";
import CahpterandVedio from "./CahpterandVedio";

// اضافة زر العودة
const page = async ({ params }) => {
  // صفحة الدروس الخاصة بالمادة
  // هنا نحضر الدروس الخاصة بالمادة وبرما ايضا التمارينات
  let { OneMaterial, NumberNevaux } = params;

  // ISR : مسبقا   OneMaterial, NumberNevaux  لا استطيع اضافتها يجب على معرفة
  let Url = process.env.NEXT_PUBLIC_BASE_URL;
  let res = await fetch(`${Url}/api/GetChaptersAndLesson`, {
    method: "POST",
    // اذا نزعتها سوف يجدث هاذا المشكل : Error: "[object Object]" is not valid JSON
    // نجرب نحها وندير ISR
    cache: "no-store",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      NumberNevaux: `${NumberNevaux}`,
      OneMaterial: `${OneMaterial}`,
    }),
  });

  if (!res.ok) {
    console.log("Not Ok res in Fetch page get chapter and Lesson  ");
  }
  res = await res.json();
  console.log("The rsulte final is : ");
  console.log(res);

  return (
    <div className="mt-8 px-3 m-auto  ">
      <Suspense
        fallback={
          <div>
            <Spinner className={` m-auto block`} />
          </div>
        }>
        {res ? (
          <CahpterandVedio res={res} />
        ) : (
          <div className="text-center">هناك مشكلة في جلب الدروس </div>
        )}
      </Suspense>
    </div>
  );
};

export default page;
