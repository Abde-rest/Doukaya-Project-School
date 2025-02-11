import Image from "next/image";
import Link from "next/link";
import Wired from "../HandelingError/wired.webp";
// ليست هناك دروس او ليست هناك مواد بعد

const NotFoundContent = () => {
  return (
    <div className="text-center m-auto">
      <Image
        src={require("@/app/Niveaux/Componet/HandelingError/wired.webp")}
        className="max-w-72 max-h-72 m-auto"
        alt="Not foud Lesson and chapter "
      />
      <h1 className="text-2xl ">ليست هناك مواد بعد ... نحن نعمل عليها </h1>
      <Link href={"/Niveaux"}>
        {" "}
        <button className="bg-primaryV2 hover:bg-primaryV2/80 py-2 px-3 rounded shadow mt-3">
          عودة
        </button>
      </Link>
    </div>
  );
};
export default NotFoundContent;
