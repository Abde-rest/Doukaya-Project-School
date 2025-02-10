import React from "react";
import BoxStatistique from "./Componet/BoxStatistique";
import ToptextHedingpage from "../coponent/ToptextHedingpage";

const page = async () => {
  let res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/GetNumberAllUers`,
    {
      cache: "no-store",
    }
  );
  let NumberUers = await res.json();

  return (
    <div className=" w-full ">
      <ToptextHedingpage
        Heding={"الأحصائيات"}
        paragrph={"جميع الأحصائيات الموجودة في الموقع "}
      />
      {/* boxs  statique */}
      {/* grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid lg:grid-cols-4 */}
      <div className="mt-3    gap-2 ">
        <BoxStatistique
          nameBox={"المستخدمين"}
          NumberBox={NumberUers}
          bgBox={`#EFB036`}>
          <svg
            className="w-7 h-7 ms-3  "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18">
            <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
          </svg>
        </BoxStatistique>
        {/* <BoxStatistique nameBox={"الدروس "} NumberBox={"قريبا"} bgBox={`#FFDAB3`}>
          <svg
            className="w-5 h-5 ms-3 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 18">
            <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
          </svg>
        </BoxStatistique>
        <BoxStatistique
          nameBox={"المستخدمين"}
          NumberBox={"قريبا"}
          bgBox={`#A6CDC6`}>
          <svg
            className="w-7 h-7 ms-3  "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18">
            <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
          </svg>
        </BoxStatistique>
        <BoxStatistique
          nameBox={"المستخدمين"}
          NumberBox={"قريبا"}
          bgBox={`#FFA09B`}>
          <svg
            className="w-7 h-7 ms-3  "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18">
            <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
          </svg>
        </BoxStatistique> */}
      </div>
      <div className="mt-3 shadow-lg ">المخططات هنا </div>
    </div>
  );
};

export default page;
