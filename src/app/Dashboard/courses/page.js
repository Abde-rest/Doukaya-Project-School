import Table from "./componet/Table";
import ToptextHedingpage from "../coponent/ToptextHedingpage";
import BuutonAdd from "../coponent/BuutonAdd";
import { materialList, ChapterList, NevauxlList } from "./componet/listFilter";
import { theadListCourse } from "./componet/ListTableTop";
import FormAdd from "../coponent/FormAdd";

const page = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        {/* open form  and add cours   */}
        <BuutonAdd addText={"درس"} nameFunc={"addLessone"} />
        <div>
          <ToptextHedingpage
            Heding={"الدروس"}
            paragrph={"جميع الدروس الموجودة في الموقع "}
          />
        </div>
      </div>

      {/* Table  */}
      <Table
        nameTable={"الدروس"}
        // ااسم الفيلتر
        SelectFixedOne={"المادة "}
        SelectFixedTwo={"المستوى"}
        // المعطيات داخل الفيلتر
        ListFilterOne={materialList}
        ListFilterTwo={ChapterList}
        ListFilterThree={NevauxlList}
        theadListTopTable={theadListCourse}
      />
    </>
  );
};

export default page;
