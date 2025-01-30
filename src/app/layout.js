"use client";
import "./globals.css";
import Footer from "./Componet/FotterUi/Footer";
import HeaderUi from "./Componet/Hedaer/header";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "./Componet/Hedaer/Componet/Logo";


export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="en">

      <body className=" bg-primary  ">
        {pathname === "/" && <HeaderUi />}

        {pathname === "/Login" || pathname === "/SingUp" ? (
          <div className="flex container m-auto px-20 items-center justify-between mt-12 ">
            {/* Back Ui  */}
            <Link href={"/"}>
              {" "}
              <div className="click_button cursor-pointer p-1 rounded flex items-center gap-2">
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
                <h6>عودة </h6>
              </div>
            </Link>
            <Logo />
          </div>
        ) : null}

        {/* {pathname === "/Niveaux" ? <HeaderUiCors /> : null} */}

        {children}

        {pathname === "/Login" ||
        pathname === "/SingUp" ||
        pathname === "/Dashboard/statistique" ||
        pathname === "/Dashboard/courses" ||
        pathname === "/Dashboard/Users"  ? null : (
          <Footer />
        )}
      </body>
    </html>
  );
}
