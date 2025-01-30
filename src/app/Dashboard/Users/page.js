import React from "react";
import ToptextHedingpage from "../coponent/ToptextHedingpage";
import BuutonAdd from "../coponent/BuutonAdd";

const page = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <BuutonAdd addText={"مستخدم"} nameFunc={""} />
        <div>
          <ToptextHedingpage
            Heding={"المستخدمين"}
            paragrph={"جميع المستخدمين في الموقع "}
          />
        </div>
      </div>
    </div>
  );
};

export default page;
