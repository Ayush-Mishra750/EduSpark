"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";

function SelectOption({selectedStudyType}) {
  const options = [
    {
      name: "Exam",
      icon: "/exam.png",
    },
    {
      name: "Job Interview",
      icon: "/job.png",
    },
    {
      name: "Practice",
      icon: "/exam_1.png",
    },
    {
      name: "Coding prep",
      icon: "/code.png",
    },
    {
      name: "other",
      icon: "/knowledge.png",
    },
  ];
  const [selectionOption, setSelectionOption] = useState("");
  return (
    <div>
      <h2 className="text-center mb-2 text-lg">
        For which you want to create your Personal study material{" "}
      </h2>
      <div className=" mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10  ">
        {options.map((option, index) => {
          return (
            <div
              key={index}
              className={`p-4 flex flex-col items-center justify-center border rounded-xl hover:bg-slate-200 cursor-pointer ${selectionOption===option?.name && `bg-slate-200`}`}
              onClick={()=>{setSelectionOption(option.name);
                selectedStudyType(option.name)}}
            >
              <Image
                src={option.icon}
                alt={option.name}
                width={50}
                height={50}
              />
              <h2 className="font-bold text-lg mt-2">{option.name}</h2>
            </div>
          );
        })}
      </div>
      
    </div>
  );
}

export default SelectOption;
