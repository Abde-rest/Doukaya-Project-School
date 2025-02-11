"use client"; // Error boundaries must be Client Components

import Footer from "@/app/Componet/FotterUi/Footer";
import Image from "next/image";
import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="text-center">
      <Image
        className="w-80 m-auto"
        src={require("@/public/Problem/error.png")}
        alt=""
      />
      <h2 className="text-2xl"> حدثت مشكلة ما !!! رجاء اعد المحاولة </h2>
      <button
        className="bg-primaryV2  rounded-md px-2 py-2 mt-3 hover:bg-primaryV2/70"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }>
        حاول مرة اخرى
      </button>
      <Footer />
    </div>
  );
}
