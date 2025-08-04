"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import Logo from "@/public/assests/logo.png";
export default function Navbar() {
  return (
    <div className="flex items-center justify-between bg-gradient-to-r from-[#355C7D] via-[#6C5B7B] to-[#C06C84] h-20 px-8 font-medium text-lg text-white shadow-md">
      <Link href="/" className="flex items-center gap-2">
        <Image src={Logo} alt="logo" width={60} height={60} />
      </Link>

      <ul className="flex gap-6 font-sans">
        <li>
          <Link href="/episodes">Episodes</Link>
        </li>
        <li>
          <Link href="/blogs">Blogs</Link>
        </li>
        <li>
          <div className="h-6 w-0.5 bg-black mt-1"></div>{" "}
        </li>

        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li>
          <Link href="/subscribe">Subscribe</Link>
        </li>
        <li>
          <Link href="/reviews">Reviews</Link>
        </li>
      </ul>

      <Button className="cursor-pointer rounded-2xl w-28 p-2">Register</Button>
    </div>
  );
}
