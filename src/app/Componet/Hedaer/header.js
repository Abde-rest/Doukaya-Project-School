import Link from "next/link";
import React from "react";
import MenuBar from "./MenuBar";

const HeaderUi = () => {
  return (
    <header className="container mt-5 sm:px-10 px-4  m-auto flex justify-between items-center gap-2 ">
      <Link
        href={"/"}
        className=" ml-4 md:ml-14 font-bold  text-3xl font_Kufam ">
        دقية_
      </Link>
      <div className=" hidden sm:flex flex-1 justify-center gap-2">
        {" "}
        <Link
          className="text-sm p-2   hover:bg-black/5 rounded-full w-fit transition-all"
          href={"/blog"}>
          مقالات
        </Link>
        <Link
          className="text-sm p-2 hover:bg-black/5 rounded-full w-fit  transition-all"
          href={"/About"}>
          من نحن ؟
        </Link>
        <Link
          className="text-sm p-2 hover:bg-black/5 rounded-full w-fit  transition-all"
          href={"/"}>
          الرئيسية
        </Link>
      </div>
      <div className="hidden sm:flex   gap-3">
        <Link href={"/Login"}>
          {" "}
          <button className=" py-2 px-4 text-sm rounded-md border-2 border-black">
            تسجيل الدخول
          </button>
        </Link>
      </div>
      <MenuBar />
    </header>
  );
};

export default HeaderUi;
