"use client";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

function WelcomeBanner() {
  const { user } = useUser();
  return (
    <div className="p-5 bg-blue-600 w-full text-white rounded-lg flex items-center gap-10  ">
      <Image src={"/laptop.png"} alt="laptop" width={100} height={100} />
      <div className="mt-3 ">
           <h2 className="font-bold text-3xl">Hello, {user?.fullName}</h2>
            <p className="font-medium text-xl">
             Welcome back,Its time to get back and start learning...
            </p>
      </div>
    </div>
  );
}

export default WelcomeBanner;
