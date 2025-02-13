"use client";

import Logo from "../Componet/Logo";
// import HerderUiUserProfail from "./HerderUiUserProfaik/HerderUiUserProfaik";

import Image from "next/image";

const HeaderUiCors = ({ setisopen, isOpen }) => {
  // <div className="z-50  w-full  flex items-center">
  //   <div className="bg-black/15  px-4 text-white flex-1 flex items-center justify-between">
  //     <Logo />

  //     <div className="flex items-center justify-center gap-3">
  //       <HerderUiUserProfail wImage={"w-10"} hImage={"h-10"} noHover={true} />
  //       <MenuBar />
  //     </div>
  //   </div>
  // </div>
  return (
    <header className="glass   mb-10 top-0 left-0 right-0 z-50 text-[#334457]">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* الحل هنا احضر المعلومات الخاص بالمستدم من السيرفر */}
          {/* <HerderUiUserProfail /> */}

          <Logo />
          <div
            onClick={() => {
              setisopen(!isOpen);
            }}
            className="  w-8 h-8   bg-black/5 rounded-lg  p-2 cursor-pointer   ">
            <Image src={require("@/public/icons/menu.png")} alt={"Menu"} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderUiCors;
