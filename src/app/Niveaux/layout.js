"use client";
import { useState } from "react";
import HeaderUiCors from "../Componet/Hedaer/HeaderUiCors/HeaderUiCors";
import "../globals.css";
import MenuBar from "./Componet/MenuBar/MenuBar";
export default function NevauxLayout({ children }) {
  // let { NumberNevaux } = params;
  let [isOpen, setisopen] = useState(false);
  let [isOpenNevauxBar, setisOpenNevauxBar] = useState(false);
  return (
    <div className="container m-auto">

      <HeaderUiCors isOpen={isOpen} setisopen={setisopen} />
      <MenuBar
        setisopen={setisopen}
        isOpen={isOpen}
        isOpenNevauxBar={isOpenNevauxBar}
        setisOpenNevauxBar={setisOpenNevauxBar}
      />
      {children}
      {/* <Footer/> */}
    </div>
  );
}
