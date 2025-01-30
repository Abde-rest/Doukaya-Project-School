import React from "react";
import Table from "./componet/Table";
import ToptextHedingpage from "../coponent/ToptextHedingpage";
import BuutonAdd from "../coponent/BuutonAdd";

const page = () => {
  return (
    <>
      <div className="flex items-center justify-between">
      <BuutonAdd addText={"درس"} nameFunc={"addLessone"}/>
        <div>
          <ToptextHedingpage
            Heding={"الدروس"}
            paragrph={"جميع الدروس الموجودة في الموقع "}
          />
        </div>
      </div>

      {/* Table  */}
      <Table />
    </>
  );
};

export default page;
