"use client";
import "./globals.css";
import Footer from "./Componet/FotterUi/Footer";
import HeaderUi from "./Componet/Hedaer/header";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "./Componet/Hedaer/Componet/Logo";
import Notifection from "./Componet/Notifection/Notifection";
import { useNotifecation } from "@/store/storeNotifaction";
import { motion } from "framer-motion";
import NextTopLoader from "nextjs-toploader";
import { SessionProvider } from "next-auth/react";
import { Cairo } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
const cairo = Cairo({
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  const pathname = usePathname();

  let { IsSucOrLoseorNote } = useNotifecation();
  return (
    <html lang="ar" dir="rtl">
      <head>
        {/* ربط ملف manifest.json الموجود في public */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#FCFAEE " />
      </head>
      <body className={`bg-primary ${cairo.className}`}>
        <Analytics />
        <NextTopLoader />
        {IsSucOrLoseorNote.Show && (
          <motion.div
            initial={{ opacity: 0, top: -70 }}
            animate={{ opacity: 1, top: 20 }}
            exit={{ opacity: 0, top: -70 }}
            transition={{ duration: 0.5 }}
            className="z-[9999] fixed  p-2 rounded font-  left-1/2 -translate-x-1/2 duration-100 w-fit text-center">
            <Notifection IsSucOrLoseorNote={IsSucOrLoseorNote} />
          </motion.div>
        )}
        {pathname === "/" && (
          <SessionProvider>
            <HeaderUi />
          </SessionProvider>
        )}
        {pathname === "/Login" || pathname === "/SignUp" ? (
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
        <SessionProvider>
          {/* <HeaderUi /> */}
          {children}
        </SessionProvider>
        {/* {pathname === "/Login" ||
        pathname === "/SingUp" ||
        pathname === "/Dashboard/statistique" ||
        pathname === "/Dashboard/courses" ||
        pathname === "/Dashboard/Users" ? null : (
          <Footer />
        )} */}

        {pathname === "/" || pathname === "Niveaux" ? <Footer /> : null}
      </body>
    </html>
  );
}
