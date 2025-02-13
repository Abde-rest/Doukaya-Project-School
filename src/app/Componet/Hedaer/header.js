"use client";
// This is client Component
// beacu => Layout is client
import Link from "next/link";
import Logo from "./Componet/Logo";
import MenuBar from "./Componet/MenuBar";
import { useSession } from "next-auth/react";
const HeaderUi = () => {
  let Session = useSession();
  // unauthenticated
  // authenticated

  return (
    <header className="container mt-5 sm:px-10 px-4  m-auto flex justify-between items-center gap-2">
      <Logo />
      <div className=" hidden sm:flex flex-1 justify-end gap-2">
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

      {Session.status === "unauthenticated" && (
        <div>
          <div className="hidden sm:flex   gap-3">
            <Link href={"/Login"}>
              {" "}
              <button className=" py-2 px-4 text-sm rounded-md ">
                تسجيل الدخول
              </button>
            </Link>
            <Link href={"/SignUp"}>
              {" "}
              <button className=" py-2 px-4 text-sm rounded-md border-2 border-black bg-primaryV2 ">
                تسجيل
              </button>
            </Link>
          </div>
        </div>
      )}
      <MenuBar status={Session.status} />
    </header>
  );
};

export default HeaderUi;
