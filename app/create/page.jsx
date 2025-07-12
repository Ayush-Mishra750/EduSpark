"use client";
import React, { useState } from "react";
import SelectOption from "./_components/SelectOption";
import { Button } from "@/components/ui/button";
import TopicInput from "./_components/TopicInput";

function Create() {
  const [step, setStep] = useState(0);
  const [formData,setFormdata]=useState([]);
  const handleUserInput=(fieldName,fieldValue)=>{

    setFormdata((prev)=>({
        ...prev,
        [fieldName]:fieldValue
    }))
    console.log(formData);

  }
  return (
    <div className="flex flex-col items-center p-5 md:px-24 lg:px-36 m-9 ">
      <h2 className="font-bold text-5xl text-blue-600">
        Start Building Your Personal Study Material
      </h2>
      <p className="text-gray-500 text-lg mt-3">
        Fill all the details in order to generate the study material for your
        new project.
      </p>
      <div className="mt-10">{step == 0 ? <SelectOption  selectedStudyType={(value)=>{handleUserInput('studyType',value)}}/> : <TopicInput
      setTopic={(value)=>handleUserInput('topic',value)}
      setDifficultyLevel={(value)=>handleUserInput('difficultyLevel',value)} />}</div>
      <div className="flex justify-between mt-32 gap-30">
      {step!=0?  <Button  onClick={()=>setStep(step-1)} className='bg-blue-500 hover:bg-slate-300 text-black font-bold'>Prev</Button>:" "}
        {step==0?<Button onClick={()=>setStep(step+1)}>Next</Button>:<Button className= " font-bold hover:bg-slate-200 hover:text-black">Generate</Button>}
      </div>
    </div>
  );
}

export default Create;
