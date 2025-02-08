// "use client";
import BtnLinkCorseNow from "@/app/Componet/Btn/BtnLinkCorseNow";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BoxNevaux = ({ image, textNevaux, hrefLink }) => {
  // <div className="div_shdow text-center  w-full bg-white relative">
  //   <Image
  //     className="w-20 h-20 m-auto  "
  //     src={image}
  //     alt="PhotoImage"
  //   />
  //   <h1 className="mb-2">{textNevaux}</h1>
  //   <div className="m-auto">
  //     <BtnLinkCorseNow hrefLink={hrefLink} />
  //   </div>
  // </div>
  return (
    <Link href={"/Niveaux/"+hrefLink}>
      <div className="gradient-border z-20 relative block">
        <div className="glass rounded-lg p-6 h-full card-hover z-20">
          <div className="flex items-star justify-between mb-4 z-20">
            <div className="px-3 py-1 h-fit rounded-full glass text-sm font-medium text-[#334457]">
              {/* {count} */}
              10
            </div>
            <div className="flex items-center gap-4 z-20">
              <div>
                <h3 className="text-lg font-semibold text-[#334457]">
                  {textNevaux}
                </h3>
                <p className="text-[#66748399] text-sm">تقدم لك</p>
              </div>
              <div className=" rounded-lg bg-[#f7bc4b33]">
                <Image src={image} alt="image" className="w-14 h-14" />
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
    </Link>
  );
};

export default BoxNevaux;
