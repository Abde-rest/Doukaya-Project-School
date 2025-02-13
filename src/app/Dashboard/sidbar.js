import React from "react";
import Logo from "../Componet/Hedaer/Componet/Logo";
import Link from "next/link";
import Image from "next/image";
import BtnSignOut from "./BtnSignOut";

const Sidbar = () => {
  return (
    <div className=" md:w-52 md:mr-6 mt-6 sticky top-0 ">
      <div className="text-center mb-10 hidden md:block   ">
        <Logo />
      </div>
      <ul className="pr-2 mt-10 lg:mt-0">
        <li>
          <Link
            href="/Niveaux"
            prefetch={true}
            className="flex items-center p-2 justify-end  hover:-translate-x-2 transition">
            <span className="hidden md:block ">المستويات </span>
            <Image
              className="w-5 h-7  ms-3"
              src={require("@/public/Dahborde/graduation.svg")}
              alt="graduation"
            />
          </Link>
        </li>
        <li>
          <Link
            href="/Dashboard/statistique"
            prefetch={true}
            className="flex items-center p-2 justify-end  hover:-translate-x-2 transition">
            <span className="hidden md:block ">الأحصائيات </span>
            <svg
              className="w-5 h-5  ms-3 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 21">
              <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
              <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
            </svg>
          </Link>
        </li>

        <li>
          <Link
            href="/Dashboard/courses"
            prefetch={true}
            className="flex items-center p-2 justify-end  hover:-translate-x-2 transition">
            <span className="hidden md:block ">الدروس</span>
            <svg
              className="w-5 h-5 ms-3 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 18">
              <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
            </svg>
          </Link>
        </li>

        <li>
          <Link
            href="/Dashboard/Users"
            prefetch={true}
            className="flex items-center p-2 justify-end hover:-translate-x-2 transition">
            <span className="hidden md:block ">المستخدمين </span>
            <svg
              className="w-5 h-5 ms-3  "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18">
              <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
            </svg>
          </Link>
        </li>

        {/* <li className="p-2  hover:bg-red-400">
          <a
            href="#"
            className="flex items-center  justify-end hover:-translate-x-2 transition">
            <span className="hidden md:block ">تسجيل الخروج </span>
            <svg
              className="shrink-0 w-5 h-5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 16">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
              />
            </svg>
          </a>
        </li> */}

        <BtnSignOut />
      </ul>
    </div>
  );
};

export default Sidbar;
