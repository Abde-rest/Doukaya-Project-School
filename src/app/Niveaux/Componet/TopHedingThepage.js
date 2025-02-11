import Image from "next/image";
import React from "react";

const TopHedingThepage = ({ name }) => {
  return (
    <div className="mb-12 mt-20 flex items-center justify-center gap-2">
      <Image
        // src={require("@/public/icons/IconsHomePage/star2.png")}
        src={require("@/public/icons/IconsHomePage/star2.png")}
        className="w-10 h-10"
        alt="Stars"
      />
      <h2 className="text-2xl text-center font-bold text-[#334457] font_Kufam ">
        {name}
      </h2>
    </div>
  );
};

export default TopHedingThepage;
