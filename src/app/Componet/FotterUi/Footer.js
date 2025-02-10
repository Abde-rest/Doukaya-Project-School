import Image from "next/image";
import Link from "next/link";
import React from "react";
import ShochilaContect from "./ShochilaContect";

const Footer = () => {
  return (
    <footer className=" pt-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Logo */}
          <Link href="/" className=" text-2xl font-bold  transition-colors">
            دقية_
          </Link>{" "}
          <ShochilaContect />
          {/* Copyright */}
          <div className=" text-sm py-3">
            © {new Date().getFullYear()} AbdouLach. جميع الحقوق محفوظة.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
