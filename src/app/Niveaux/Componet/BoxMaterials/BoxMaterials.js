import Image from "next/image";
import React from "react";

const BoxMaterials = ({ _id, name, Tolesson }) => {
  return (
    <div className="flex hover:bg-slate-300 hover:scale-95 duration-100 cursor-pointer items-center rounded-md overflow-hidden justify-between bg-white oe   shadow-lg mb-1 md:mb-3 ">
      {/* nubmer metar  */}
      <div className="text-lg text-black/80 bg-primaryV2 h-full py-3 flex items-center justify-center min-w-12  px-2">
        {Tolesson}
      </div>

      {/* name metar  */}
      <div className="py-3 text-lg text-end w-full mr-3 ">{name} </div>

      {/* icon metar  */}
      <div className="px-2 h-full ">
        <Image
          width={50}
          src={require("@/public/iconsMaterials/atom (1).png")}
          alt={`${name} Logo`}
        />
      </div>
    </div>
  );
};

export default BoxMaterials;
