"use client";
import { useNotifecation } from "@/store/storeNotifaction";
import React, { useEffect } from "react";
const Notifection = () => {
  let { IsSucOrLoseorNote, setIsSucOrLoseorNote } = useNotifecation();

  useEffect(() => {
    let Timer = setTimeout(() => {
      setIsSucOrLoseorNote({ ...IsSucOrLoseorNote, Show: false });
    }, 3000);
    return () => clearTimeout(Timer);
  });

  return (
    <div
      className={`${IsSucOrLoseorNote.BgColor} text-sm md:text-lg px-2 md:px-4 py-2 rounded-lg shadow-md font-semibold `}>
      {IsSucOrLoseorNote.TextNotifeaction || null}
    </div>
  );
};

export default Notifection;
