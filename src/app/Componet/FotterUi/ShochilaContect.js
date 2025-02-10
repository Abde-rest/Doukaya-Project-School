import Image from "next/image";
import Link from "next/link";
import React from "react";

const ShochilaContect = () => {
  return (
    <div>
      {/* Contact Links */}
      <div className="flex gap-6 ">
        <Link href="mailto:contact@example.com">
          <Image
            className="w-8 h-8 hover:scale-105 transition"
            src={require("@/public/Sochail/facebook.png")}
            alt={"Facbook"}
          />
        </Link>
        <Link href="tel:+1234567890">
          <Image
            className="w-8 h-8 hover:scale-105 transition"
            src={require("@/public/Sochail/gmail.png")}
            alt={"Facbook"}
          />
        </Link>
      </div>
    </div>
  );
};

export default ShochilaContect;
