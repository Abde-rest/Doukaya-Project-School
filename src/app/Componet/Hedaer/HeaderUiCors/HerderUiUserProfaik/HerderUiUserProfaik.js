import { authoption } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import Image from "next/image";
import React from "react";
const HerderUiUserProfail = async () => {
  console.log("Yes");

  let session = await getServerSession(authoption);
  return (
    <div className="flex items-center gap-4">
      <button className="p-2 rounded-full glass hover:bg-[#f7bc4b33] transition-colors">
        {/* <Bell className="w-5 h-5 text-[#334457]" /> */}
      </button>
      <div className="flex items-center gap-2 glass rounded-full px-4 py-2">
        <span className="text-[#334457]">
          {session.user.email.split("@")[0]}
        </span>
        <div className="w-8 h-8 rounded-full bg-[#f7bc4b] flex items-center justify-center">
          {/* <User className="w-4 h-4 text-[#FCFAEF]" /> */}
          <Image
            src={require("@/public/UserInterface/user.png")}
            alt="UesrImage"
          />
        </div>
      </div>
      <button className="md:hidden p-2 rounded-full glass hover:bg-[#f7bc4b33] transition-colors">
        {/* <Menu className="w-5 h-5 text-[#334457]" /> */}
      </button>

      {/* List Profial and  */}
      {/* <div className="  transition ease-in-out  opacity-0  -z-50 translate-y-4 group-hover:opacity-100 group-hover:z-50 group-hover:translate-y-0 absolute bg-black -bottom-16  left-0 w-full">
        <Link
          href={"/Profail"}
          className="py-2 px-1 text-sm text-end block w-full hover:bg-slate-700">
          الملف الشخصي
        </Link>
        <li className="flex items-center justify-center p-1 gap-1 bg-red-400 hover:bg-red-900 cursor-pointer">
          الخروج
          <svg
            width="20px"
            height="20px"
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
        </li>
      </div> */}
    </div>
  );
};

export default HerderUiUserProfail;
