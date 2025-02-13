"use client";
import { useState } from "react";
import HeaderUiCors from "../Componet/Hedaer/HeaderUiCors/HeaderUiCors";
import "../globals.css";
import MenuBar from "./Componet/MenuBar/MenuBar";
import { SessionProvider } from "next-auth/react";
import Footer from "../Componet/FotterUi/Footer";
export default function NevauxLayout({ children }) {
  // let { NumberNevaux } = params;
  let [isOpen, setisopen] = useState(false);
  let [isOpenNevauxBar, setisOpenNevauxBar] = useState(false);
  return (
    <div className="container m-auto">
      <HeaderUiCors isOpen={isOpen} setisopen={setisopen} />
      <SessionProvider>
        <MenuBar
          setisopen={setisopen}
          isOpen={isOpen}
          isOpenNevauxBar={isOpenNevauxBar}
          setisOpenNevauxBar={setisOpenNevauxBar}
        />
      </SessionProvider>
      {children}
      <Footer />
    </div>
  );
}
