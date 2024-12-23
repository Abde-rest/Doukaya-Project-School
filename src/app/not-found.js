import Image from "next/image";
import Link from "next/link";
import HeaderUi from "./Componet/Hedaer/header";

export default function NotFound() {
  return (
    <div>
      <HeaderUi />
      <div>
        <div className="m-auto text-center">
          <Image
            src={require("@/public/NotFound.png")}
            className="w-80 r m-auto h-80"
            alt="Not found "
          />
          <h2 className="mt-4 text-4xl"> الصفحة غير موجودة</h2>
          <Link
            href="/"
            className="px-3 py-2 flex items-center gap-2 rounded-lg mt-4 hover:bg-primaryV2/80   bg-primaryV2  w-fit m-auto">
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M19 12H5M5 12L12 19M5 12L12 5"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            الصفحة الرئيسية
          </Link>
        </div>
      </div>
    </div>
  );
}
