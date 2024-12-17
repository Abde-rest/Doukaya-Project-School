"use client";
import "./globals.css";
import Footer from "./Componet/FotterUi/Footer";
import HeaderUi from "./Componet/Hedaer/header";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className=" bg-primary  ">
        {pathname === "/Login" ? (
          <div className="flex container m-auto px-20 items-center justify-between mt-12 ">
            {" "}
            <Link href={"/"}>
              {" "}
              <div className="click_button cursor-pointer p-1 rounded flex items-center gap-2">
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3 9H16.5C18.9853 9 21 11.0147 21 13.5C21 15.9853 18.9853 18 16.5 18H12M3 9L7 5M3 9L7 13"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <h6>عودة </h6>
              </div>
            </Link>
            <Link
              href={"/"}
              className="   font-bold  text-3xl font_Kufam text-center block  ">
              دقية_
            </Link>
          </div>
        ) : (
          <HeaderUi />
        )}
        {children}

        {pathname === "/Login" ? null : <Footer />}
      </body>
    </html>
  );
}
