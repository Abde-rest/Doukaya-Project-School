// "use client";
import BtnLinkCorseNow from "@/app/Componet/Btn/BtnLinkCorseNow";
import Image from "next/image";
import React from "react";

const BoxNevaux = ({ image, textNevaux , hrefLink }) => {
  return (
    <div className="div_shdow text-center  w-full bg-white relative">
      <Image
        className="w-20 h-20 m-auto  "
        src={image}
        alt="PhotoImage"
      />
      <h1 className="mb-2">{textNevaux}</h1>
      <div className="m-auto">
        <BtnLinkCorseNow hrefLink={hrefLink} />
      </div>
    </div>
  );
};

export default BoxNevaux;
