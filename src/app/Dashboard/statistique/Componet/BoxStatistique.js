import React from "react";

const BoxStatistique = (prop) => {
  return (
    <div
      style={{ background: prop.bgBox }}
      className={` ${prop.bgBox} text-center p-2 rounded-sm shadow-lg font-bold text-lg w-full  `}>
      <h1 className="mb-2"> {prop.nameBox} </h1>{" "}
      <h1 className="text-center m-auto flex items-center justify-center  text-3xl">
        {prop.NumberBox}
        {prop.children}
      </h1>
    </div>
  );
};

export default BoxStatistique;
