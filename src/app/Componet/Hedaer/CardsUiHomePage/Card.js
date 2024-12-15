import Image from "next/image";
import Link from "next/link";
import React from "react";

const Cards = () => {
  return (
    <div>
      <div className="mt-10 flex items-center gap-4  flex-wrap justify-center  ">
        <div className="max-w-sm  mb-3  rounded-lg  bg-primary div_shdow">
          <div className="p-2 pb-0">
            <div className="bg-black/5d  rounded-lg overflow-hidden shadow-black/25 shadow-md w-full h-48  ">
              <Image
                className="rounded-t-lg w-full h-full "
                src={require("@/public/ImageCorsesHomePage/download2.jpg")}
                alt="Corse"
              />
            </div>
          </div>
          <div className="p-5 text-end">
            <div className="flex items-center justify-end mb-3 mr-auto  gap-3  ">
              <div>
                <h2 className="font-bold">بالأبيض ملاك </h2>
                <p>أستاذ رياضيات </p>
              </div>
              <div className="bg-black/10 overflow-hidden border-black  rounded-full w-12 h-12">
                {" "}
                <Image
                  className="w-full h-full"
                  src={require("@/public/ProfailImageHomePage/profailImage.jpg")}
                  alt="Profailmage"
                />
              </div>
            </div>
            <h5 className="mb-2 text-xl font-bold  cursor-default ">
              تحضير جميع دروس الرياضيات للسنة الرابعة من تعليم المتوسط
            </h5>

            <p className="mb-3 cursor-default font-normal text-black/90">
              هنا سوف ترى جميع تحضير جميع دروس الرياضيات للسنة الرابعة من تعليم
              المتوسط
            </p>
            <Link
              href={"#"}
              className="flex gap-1 overflow-hidden ml-auto hover:bg-black/70 items-center w-fit px-3 py-2 text-sm font-medium  text-white bg-black rounded-lg relative  button_Effect    ">
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 "
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M19 12H5M5 12L12 19M5 12L12 5"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              أدرس الأن
            </Link>
          </div>
        </div>
        <div className="max-w-sm  mb-3  rounded-lg  bg-primary div_shdow">
          <div className="p-2 pb-0">
            <div className="bg-black/5d  rounded-lg overflow-hidden shadow-black/25 shadow-md w-full h-48  ">
              <Image
                className="rounded-t-lg w-full h-full "
                src={require("@/public/ImageCorsesHomePage/download2.jpg")}
                alt="Corse"
              />
            </div>
          </div>
          <div className="p-5 text-end">
            <div className="flex items-center justify-end mb-3 mr-auto  gap-3  ">
              <div>
                <h2 className="font-bold">بالأبيض ملاك </h2>
                <p>أستاذ رياضيات </p>
              </div>
              <div className="bg-black/10 overflow-hidden border-black  rounded-full w-12 h-12">
                {" "}
                <Image
                  className="w-full h-full"
                  src={require("@/public/ProfailImageHomePage/profailImage.jpg")}
                  alt="Profailmage"
                />
              </div>
            </div>
            <h5 className="mb-2 text-xl font-bold  cursor-default ">
              تحضير جميع دروس الرياضيات للسنة الرابعة من تعليم المتوسط
            </h5>

            <p className="mb-3 cursor-default font-normal text-black/90">
              هنا سوف ترى جميع تحضير جميع دروس الرياضيات للسنة الرابعة من تعليم
              المتوسط
            </p>
            <Link
              href={"#"}
              className="flex gap-1 overflow-hidden ml-auto hover:bg-black/70 items-center w-fit px-3 py-2 text-sm font-medium  text-white bg-black rounded-lg relative  button_Effect    ">
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 "
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M19 12H5M5 12L12 19M5 12L12 5"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              أدرس الأن
            </Link>
          </div>
        </div>
        <div className="max-w-sm  mb-3  rounded-lg  bg-primary div_shdow">
          <div className="p-2 pb-0">
            <div className="bg-black/5d  rounded-lg overflow-hidden shadow-black/25 shadow-md w-full h-48  ">
              <Image
                className="rounded-t-lg w-full h-full "
                src={require("@/public/ImageCorsesHomePage/download2.jpg")}
                alt="Corse"
              />
            </div>
          </div>
          <div className="p-5 text-end">
            <div className="flex items-center justify-end mb-3 mr-auto  gap-3  ">
              <div>
                <h2 className="font-bold">بالأبيض ملاك </h2>
                <p>أستاذ رياضيات </p>
              </div>
              <div className="bg-black/10 overflow-hidden border-black  rounded-full w-12 h-12">
                {" "}
                <Image
                  className="w-full h-full"
                  src={require("@/public/ProfailImageHomePage/profailImage.jpg")}
                  alt="Profailmage"
                />
              </div>
            </div>
            <h5 className="mb-2 text-xl font-bold  cursor-default ">
              تحضير جميع دروس الرياضيات للسنة الرابعة من تعليم المتوسط
            </h5>

            <p className="mb-3 cursor-default font-normal text-black/90">
              هنا سوف ترى جميع تحضير جميع دروس الرياضيات للسنة الرابعة من تعليم
              المتوسط
            </p>
            <Link
              href={"#"}
              className="flex gap-1 overflow-hidden ml-auto hover:bg-black/70 items-center w-fit px-3 py-2 text-sm font-medium  text-white bg-black rounded-lg relative  button_Effect    ">
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 "
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M19 12H5M5 12L12 19M5 12L12 5"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              أدرس الأن
            </Link>
          </div>
        </div>
      </div>
      <Link className="w-fit  m-auto mt-2 block relative " href={""}><button className="click_button  transition  ">المزيد </button> </Link>
    </div>
  );
};

export default Cards;
