"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, Shield, UserCircle } from "lucide-react";
import { usePathname } from "next/navigation";
import { Progress } from "@/components/ui/progress"
import Link from "next/link";
function SideBar() {
  const menuList = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      path: "/dashboard",
    },
    {
      name: "Upgrade",
      icon: Shield,
      path: "/dashboard/upgrade",
    },
    {
      name: "Profile",
      icon: UserCircle,
      path: "/dashboard/profile",
    },
  ];
  const path = usePathname();
  return (
    <div className="h-screen shadow-md p-5">
      <div className=" flex gap-2 items-center">
        <Image src="/logo.svg" alt="Logo" width={40} height={40} />
        <h2 className="font-bold text-2xl">EduSpark</h2>
      </div>
      <div className="mt-10">
        <Link href='/create'>
        <Button className="w-full bg-blue-700 ">+ Create New</Button>
        </Link>
        <div>
          {menuList.map((menu, index) => {
            return (
              <div
                key={index}
                className={`flex gap-2 items-center p-3 hover:bg-slate-300 rounded-xl cursor-pointer mt-2 ${
                  path === menu.path && `bg-slate-200`
                }`}
               >
                <menu.icon />
                <h2>{menu.name}</h2>
              </div>
            );
          })}
        </div>

        <div className="border p-5 bg-slate-200 rounded-lg absolute bottom-10 w-55" >
            <h2 className="text-lg mb-2">Available Credits:5</h2>
                <Progress value={33} />
              <h2 className="text-sm">1 out of 5 Credits Used</h2> 
              <Link href={'/dashboard/upgrade'} className="text-primary text-xs mt-3">Upgrade to create more</Link>
        </div>
      </div>
    </div>
           
  );
}

export default SideBar;
