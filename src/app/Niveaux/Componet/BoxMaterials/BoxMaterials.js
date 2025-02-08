import Image from "next/image";
import React from "react";

const BoxMaterials = ({ _id, name, Tolesson }) => {
  // Box المادة
  // <div className="flex hover:bg-slate-300 hover:scale-95 duration-100 cursor-pointer items-center rounded-md overflow-hidden justify-between bg-white oe   shadow-lg mb-1 md:mb-3 ">
  //   {/* nubmer metar  */}
  //   <div className="text-lg text-black/80 bg-primaryV2 h-full py-3 flex items-center justify-center min-w-12  px-2">
  //     {Tolesson}
  //   </div>

  //   {/* name metar  */}
  //   <div className="py-3 text-lg text-end w-full mr-3 ">{name} </div>

  //   {/* icon metar  */}
  //   <div className="px-2 h-full ">
  //     <Image
  //       width={50}
  //       src={require("@/public/iconsMaterials/atom (1).png")}
  //       alt={`${name} Logo`}
  //     />
  //   </div>
  // </div>
  return (
    <div className="gradient-border z-20 relative bloc mb-10">
      <div className="glass rounded-lg p-6 h-full card-hover z-20">
        <div className="flex items-star justify-between mb-4 z-20">
          <div className="px-3 py-1 h-fit rounded-full glass text-sm font-medium text-[#334457]">
            {Tolesson}
          </div>
          <div className="flex items-center gap-4 z-20">
            <div>
              <h3 className="text-lg font-semibold text-end text-[#334457]">
                {name}
              </h3>
              <p className="text-[#66748399] text-sm"> جميع دروس {name}</p>
            </div>
            <div className=" p-2 rounded-lg bg-[#f7bc4b33]">
              <Image
                width={30}
                height={30}
                src={require("@/public/iconsMaterials/atom (1).png")}
                alt={`${name} Logo`}
              />
            </div>
          </div>
        </div>

        <div className="h-2 bg-[#f7bc4b33] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#f7bc4b] w-1/2 ml-auto"
            // style={{ width: `${Math.min((count / 60) * 100, 100)}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default BoxMaterials;
