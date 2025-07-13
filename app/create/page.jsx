"use client";
import React, { useState } from "react";
import SelectOption from "./_components/SelectOption";
import { Button } from "@/components/ui/button";
import TopicInput from "./_components/TopicInput";
import { useUser } from "@clerk/nextjs";
import {v4 as uuidv4} from "uuid"

import axios from "axios";

function Create() {
  const [step, setStep] = useState(0);
  const [formData,setFormdata]=useState([]);
  const {user}=useUser();
  const handleUserInput=(fieldName,fieldValue)=>{

    setFormdata((prev)=>({
        ...prev,
        [fieldName]:fieldValue
    }))
  }
  /**
   * used to Save user Input and Generate course Layout using Ai
   */
   const GenerateCourseOutline=async()=>{
     try {
      const courseId=uuidv4(); 
     const result=await axios.post('api/generate-course-outline',{
      courseId:courseId,
      ...formData,
      createdBy:user?.primaryEmailAddress?.emailAddress
    })
    console.log('result',result?.data)
      } catch (error) {
      console.log(error);
    }
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
      <div className="mt-10">{step == 0 ? <SelectOption  selectedStudyType={(value)=>{handleUserInput('courseType',value)}}/> : <TopicInput
      setTopic={(value)=>handleUserInput('topic',value)}
      setDifficultyLevel={(value)=>handleUserInput('difficultyLevel',value)} />}</div>
      <div className="flex justify-between mt-32 gap-30">
      {step!=0?  <Button  onClick={()=>setStep(step-1)} className='bg-blue-500 hover:bg-slate-300 text-black font-bold'>Prev</Button>:" "}
        {step==0?<Button onClick={()=>setStep(step+1)}>Next</Button>:<Button onClick={()=>GenerateCourseOutline()} className= " font-bold hover:bg-slate-200 hover:text-black">Generate</Button>}
      </div>
    </div>
  );
}

export default Create;
