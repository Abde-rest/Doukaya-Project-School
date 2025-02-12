"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const BtnBack = () => {
  let pathname = usePathname();

  return (
    <Link href={pathname.slice(0, 12)}>
      <button className="bg-primaryV2 hover:bg-primaryV2/80 py-2 px-3 rounded shadow mt-3">
        عودة
      </button>
    </Link>
  );
};

export default BtnBack;
