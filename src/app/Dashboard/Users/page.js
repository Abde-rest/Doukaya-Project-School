import ToptextHedingpage from "../coponent/ToptextHedingpage";
import BuutonAdd from "../coponent/BuutonAdd";
import Table from "../courses/componet/Table";
import { RoleList } from "../courses/componet/listFilter";
import { theadListUsers } from "../courses/componet/ListTableTop";

// هل ياترا استخدم Table  في مكون واجد واعيد استخدامه في صفحتين
// الجدول فيه بيانات يحضرها و filter معين
/// كي اعامل معهم خاصى معا filter
const page = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        {/* بناء  على الصفحة وال btnadd سوق  ارسل بيانات ال Form add  */}

        <BuutonAdd addText={"مستخدم"} nameFunc={""} />
        <div>
          <ToptextHedingpage
            Heding={"المستخدمين"}
            paragrph={"جميع المستخدمين في الموقع "}
          />
        </div>
      </div>
      {/* serach With : Email or name  من بعد  */}
      {/* filter : Role */}
      {/* The name user is Not found  */}
      <Table
        nameTable={"المستخدمين"}
        // ااسم الفيلتر
        SelectFixedOne={"الدور"}
        // المعطيات داخل الفيلتر
        ListFilterOne={RoleList}
        theadListTopTable={theadListUsers}
      />
    </div>
  );
};

export default page;
