"use client";

import Image from "next/image";
// import HerderUiUserProfail from "@/app/Componet/Hedaer/HeaderUiCors/HerderUiUserProfaik/HerderUiUserProfaik";
import Link from "next/link";
const MenuBar = ({
  isOpen,
  setisopen,
  isOpenNevauxBar,
  setisOpenNevauxBar,
}) => {
  return (
    <>
      {/* BacGround Black When Open menu  */}
      <div
        className={`fixed top-0 transition-all  duration-300 left-0 ${
          isOpen ? "opacity-1 z-50" : "hidden"
        } w-full h-full bg-black/55  `}>
        {/* Menu bar  */}
        <div
          className={` p-5   transition-all ease-linear top-0 ml-auto relative bg-black h-full md:w-80 ${
            isOpen ? "right-0" : "-right-96"
          }  `}>
          {/* Top Menu Close */}
          <button
            className="flex items-center justify-between "
            onClick={() => setisopen(!isOpen)}>
            <div className="text-black bg-gray-200  p-1.5 rounded-lg">
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"></path>
              </svg>
            </div>
          </button>

          <ul>
            <li>
              <Link
                href="#"
                className="flex items-center gap-3 justify-end p-2 text-white text-end hover:bg-white/15 rounded-lg">
                <span className="ms-3">الملف الشخصي </span>
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20 21C20 19.6044 20 18.9067 19.8278 18.3389C19.44 17.0605 18.4395 16.06 17.1611 15.6722C16.5933 15.5 15.8956 15.5 14.5 15.5H9.5C8.10444 15.5 7.40665 15.5 6.83886 15.6722C5.56045 16.06 4.56004 17.0605 4.17224 18.3389C4 18.9067 4 19.6044 4 21M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Link>
            </li>

            <li>
              <div
                onClick={() => setisOpenNevauxBar(!isOpenNevauxBar)}
                className="flex cursor-pointer items-center gap-3 justify-between p-2 text-white text-end hover:bg-white/15 rounded-lg">
                <div>
                  <svg
                    className={`w-5 h-5  duration-100 ${
                      isOpenNevauxBar ? "-rotate-90" : "rotate-0"
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M15 18L9 12L15 6"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex items-center  gap-3">
                  <span className="ms-3">المستويات التعليمية </span>
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7.5 3H14.6C16.8402 3 17.9603 3 18.816 3.43597C19.5686 3.81947 20.1805 4.43139 20.564 5.18404C21 6.03969 21 7.15979 21 9.4V16.5M6.2 21H14.3C15.4201 21 15.9802 21 16.408 20.782C16.7843 20.5903 17.0903 20.2843 17.282 19.908C17.5 19.4802 17.5 18.9201 17.5 17.8V9.7C17.5 8.57989 17.5 8.01984 17.282 7.59202C17.0903 7.21569 16.7843 6.90973 16.408 6.71799C15.9802 6.5 15.4201 6.5 14.3 6.5H6.2C5.0799 6.5 4.51984 6.5 4.09202 6.71799C3.71569 6.90973 3.40973 7.21569 3.21799 7.59202C3 8.01984 3 8.57989 3 9.7V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.0799 21 6.2 21Z"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <ul
                className={`text-end block relative   transition-all mt-1 mb-1 overflow-hidden mr-4  `}>
                <div
                  className={` duration-200 border-r  border-primaryV2${
                    isOpenNevauxBar ? "  h-40" : " h-0  "
                  }`}>
                  <Link
                    className="flex items-center gap-2 justify-end pr-6"
                    href={"/"}>
                    <li className=" py-2  text-white/70 hover:text-white duration-100 rounded-lg">
                      السنة الأولى{" "}
                    </li>
                    <Image
                      className="w-8 h-8"
                      src={require("@/public/Svg_NumberNeavaux/level1.png")}
                      alt="Icon"
                    />
                  </Link>
                  <Link
                    className="flex items-center gap-2 justify-end pr-6"
                    href={"/"}>
                    <li className=" py-2  text-white/70 hover:text-white duration-100 rounded-lg">
                      السنة الثانية{" "}
                    </li>
                    <Image
                      className="w-8 h-8"
                      src={require("@/public/Svg_NumberNeavaux/level2.png")}
                      alt="Icon"
                    />
                  </Link>
                  <Link
                    className="flex items-center gap-2 justify-end pr-6"
                    href={"/"}>
                    <li className=" py-2  text-white/70 hover:text-white duration-100 rounded-lg">
                      السنة الثالثة{" "}
                    </li>
                    <Image
                      className="w-8 h-8"
                      src={require("@/public/Svg_NumberNeavaux/level3.png")}
                      alt="Icon"
                    />
                  </Link>
                  <Link
                    className="flex items-center gap-2 justify-end pr-6"
                    href={"/"}>
                    <li className=" py-2  text-white/70 hover:text-white duration-100 rounded-lg">
                      السنة الرابعة{" "}
                    </li>
                    <Image
                      className="w-8 h-8"
                      src={require("@/public/Svg_NumberNeavaux/level4.png")}
                      alt="Icon"
                    />
                  </Link>
                </div>
              </ul>
            </li>

            {/* singOut  */}
            <li className=" cursor-pointer  transition-all  gap-3 justify-between p-2 text-white text-end   hover:bg-red-500 rounded-lg">
              <div className="flex items-center justify-end  gap-3">
                <span className="ms-3"> الخروج</span>
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M21 21V3M3 12H17M17 12L10 5M17 12L10 19"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MenuBar;
