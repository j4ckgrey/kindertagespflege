"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Logo from "../assets/Image.png";
import Image from "next/image";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="fixed w-full top-0 left-0 z-40 flex justify-between items-center bg-amber-200 shadow-md px-10 py-1">
      <Link href="/">
        <div className="relative h-20 w-20">
          <Image src={Logo} alt="Logo" fill className="object-contain" />
        </div>
      </Link>
      <Nav />
    </header>
  );
};

export default Header;
