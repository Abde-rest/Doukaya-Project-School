import Image from "next/image";
import React from "react";

const Categories = () => {
  return (
    <div className="container m-auto cursor-default relative  ">
      <h1 className=" bg-primary w-fit m-auto div_shdow py-3 px-2   flex relative  -top-28 justify-center flex-row-reverse text-base font-bold sm:text-2xl lg:text-3xl items-center">
        <span> - المواد </span>
        <span className=" md:mx-2"> استكشف المواد التي وفرناها لك </span>
        <span className="">
          {" "}
          <Image
            className=" w-8 h-8 sm:w-10 sm:h-10  lg:w-14 lg:h-14"
            src={require("@/public/icons/IconsHomePage/star2.png")}
            alt="Star"
          />
        </span>
      </h1>

      <div className=" grid grid-cols-1 sm:grid-cols-2  px-5 lg:grid-cols-4 md:px-10 text-end m-auto">
        {/* categori  */}
        {/* start  */}
        <div className="w-full mb-10  flex justify-end sm:justify-center  items-center  gap-6 text-end  ">
          <div>
            <h4 className="font-bold mb-1 text-secondary">تاريخ وجغرافيا</h4>
            <p className="text-black/85">حوالي 50 درس </p>
          </div>
          <div className="p-2 border-2 border-secondary w-12 h-12 rounded">
            {" "}
            <Image
              src={require("@/public/IconsCategoriesPgeHome/sailing-boat.png")}
              alt="Categorie"
            />
          </div>
        </div>

        <div className="w-full mb-10   flex justify-end sm:justify-center  gap-6 text-end  sm:border-l-2   border-black">
          <div>
            <h4 className="font-bold mb-1 text-secondary">رياضيات</h4>
            <p className="text-black/85">حوالي 45 درس </p>
          </div>
          <div className="p-2 border-2  w-12 h-12 border-secondary rounded">
            {" "}
            <Image
              src={require("@/public/IconsCategoriesPgeHome/Math.png")}
              alt="Categorie"
            />
          </div>
        </div>

        <div className="w-full mb-10  flex justify-end sm:justify-center  gap-6 text-end  border-l-0  sm:border-l-0 lg:border-l-2 border-black">
          <div>
            <h4 className="font-bold mb-1 text-secondary">رياضيات</h4>
            <p className="text-black/85">حوالي 45 درس </p>
          </div>
          <div className="p-2 border-2 border-secondary w-12 h-12 rounded">
            {" "}
            <Image
              src={require("@/public/IconsCategoriesPgeHome/atom.png")}
              alt="Categorie"
            />
          </div>
        </div>

        <div className="w-full mb-10 flex justify-end sm:justify-center  gap-6 text-end  sm:border-l-2   border-black">
          <div>
            <h4 className="font-bold mb-1 text-secondary ">لغة عربية </h4>
            <p className="text-black/85">حوالي 45 درس </p>
          </div>
          <div className="p-2 border-2 border-secondary w-12 h-12 rounded">
            {" "}
            <Image
              src={require("@/public/IconsCategoriesPgeHome/dhad.png")}
              alt="Categorie"
            />
          </div>
        </div>

        {/* end  */}
      </div>
    </div>
  );
};

export default Categories;
