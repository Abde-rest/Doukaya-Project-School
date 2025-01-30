import React from "react";

const ToptextHedingpage = ({ Heding, paragrph }) => {
  return (
    <div>
      <h1 className="font-bold text-xl "> لوحة التحكم / {Heding}</h1>
      <p className="mt-2 text-black/80">{paragrph} </p>
    </div>
  );
};

export default ToptextHedingpage;
