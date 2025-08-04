"use client";
import React from "react";
import Layout from "../../components/common/Layout";
import Image from "next/image";
import Logo from "@/public/assests/logo.png";
import { Button } from "@/components/ui/button";
export default function Landing() {
  return (
    <>
      <Layout>
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between px-6 py-8 mt-8">
          <div className="md:w-1/2 text-left space-y-4 mt-10">
            <div className="flex items-center gap-2 text-xl font-semibold text-[#6db68dff]">
              <span>🔊</span> {/* Icon */}
              <span>SUB TITLE ICON</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              THE BEST AUDIOSERIES
            </h2>
            <p className="text-3xl text-black font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ,
              mollitia suscipit tempore quidem quaerat repellat culpa labore
              iure nobis enim.
            </p>
            <div className="flex -ml-2  ">
              <div>
                <Button className=" text-lg w-28 h-10 cursor-pointer rounded-2xl bg-[#355C7D]">
                  Register
                </Button>
              </div>
              <div>
                <Button className="ml-2 w-28 h-10 text-lg cursor-pointer rounded-2xl bg-[#355C7D]">
                  Contact
                </Button>
              </div>
            </div>
          </div>
 
            <div className="w-[800px] h-[800px] bg-gray-200 rounded-lg shadow-inner -mt-14 flex items-center justify-center text-gray-500">
              <Image src={Logo} alt=""></Image>
            </div>
     
        </div>
      </Layout>
    </>
  );
}
