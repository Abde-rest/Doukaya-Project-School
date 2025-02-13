"use client";
import Link from "next/link";
import React, { useState } from "react";
import ShochilaContect from "../../FotterUi/ShochilaContect";
import Image from "next/image";

const MenuBar = ({ status }) => {
  let [isMenuOpen, setisMenuOpen] = useState(false);
  function HandelMenu() {
    setisMenuOpen(!isMenuOpen);
  }

  return (
    <div className="sm:hidden  ">
      <div
        className="  w-7 h-7 z-50 relative  "
        onClick={() => {
          HandelMenu();
        }}>
        <svg
          className="cursor-pointer"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3 12H21M3 6H21M9 18H21"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>

      {/* side bar */}
      <div
        className={`  transition-all delay-200 ${
          isMenuOpen ? "bg-black/40 z-50 w-full" : "bg-none z-50  w-0 "
        } top-0 left-0 fixed  h-full  `}>
        {" "}
        <div
          className={`bg-primary transition-all delay-200  fixed top-0 ${
            isMenuOpen ? " right-0   w-5/6 " : "-right-96 w-0"
          }  h-full z-50  p-5`}>
          <div className="flex  justify-between flex-col h-full">
            <div>
              {" "}
              <div
                className=" w-10 h-10"
                onClick={() => {
                  setisMenuOpen(false);
                }}>
                <svg
                  className="cursor-pointer"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M15 9L9 15M9 9L15 15M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="flex flex-col-reverse mt-3">
                <Link
                  className="text-sm p-2   hover:bg-black/5 w-full text-end transition-all"
                  href={"/blog"}>
                  مقالات
                </Link>
                <Link
                  className="text-sm p-2 hover:bg-black/5 w-full  text-end transition-all"
                  href={"/About"}>
                  من نحن ؟
                </Link>
                <Link
                  className="text-sm p-2 hover:bg-black/5 w-full  text-end transition-all"
                  href={"/"}>
                  الرئيسية
                </Link>
              </div>
              {status === "unauthenticated" ? (
                <div className="flex flex-col mt-4  gap-3">
                  <Link
                    href={"/SignUp"}
                    className="text-sm  text-center py-2 px-4  rounded-md border-2 border-black bg-primaryV2">
                    التسجيل
                  </Link>
                </div>
              ) : (
                <Link
                  href={"/Niveaux"}
                  className="flex items-center justify-center gap-1 click_button bg-primaryV2  font-bold mt-5 hover:bg-primaryV2/50 transition">
                  <button>ابدأ التعلم الأن</button>
                  <Image
                    className="w-10 h-10"
                    src={require("@/public/UserInterface/user.png")}
                    alt="UersInterface "
                  />
                </Link>
              )}
            </div>
            <div className="flex items-center justify-end">
              <ShochilaContect />
              <h4 className=" mr-3 ml-3 text-end"> : تواصل معنا </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
