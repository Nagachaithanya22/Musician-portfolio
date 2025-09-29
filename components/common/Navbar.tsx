 "use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import Logo  from "../../public/assets/Tanpura.png"
import { Noto_Sans } from "next/font/google";

const Noto = Noto_Sans({
  subsets: ["devanagari"],
  variable: "--font-noto",
});

export default function navbar() {
  const WHATSAPP_PHONE_NUMBER = "9606009998";

  return (
    <div
      id="nav-bg"
      className="flex items-center justify-between bg-[#1a121b] h-20 px-8 font-medium text-lg text-[#f5f5dc] shadow-md"
    >
      <Link href="/" className="flex items-center gap-x-4">
        <Image src={Logo} alt="logo" width={80} height={60} />
        <span
          className={`-ml-8 font-semibold text-2xl tracking-wide text-[#d87078] hidden sm:block ${Noto.variable}`}
        >
          स्वर माया
        </span>
      </Link>
      <div>
        <a
          href={`https://wa.me/${WHATSAPP_PHONE_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group overflow-hidden rounded-full transition-transform duration-300 transform hover:scale-105 shadow-lg"
        >
          <Button className="bg-[#d87078] text-[#1a121b] cursor-pointer rounded-full h-10 px-6 font-bold text-base transition-colors duration-300 hover:bg-[#c5a45e] hover:text-[#1a121b]">
            Contact Us
          </Button>
        </a>
      </div>
    </div>
  );
}
