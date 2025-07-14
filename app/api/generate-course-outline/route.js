import { courseOutlineAiModel } from "@/configs/AiModel";
import { STUDY_MATERIAL_TABLE } from "@/configs/schema";
import { NextResponse } from "next/server";


export async function POST(req){
const {courseId,topic,courseType,difficultyLevel,createdBy}=await req.json();

const Prompt='Generate a study material for '+topic+' for '+courseType+' and level of difficulty will be '+difficultyLevel+' with summary of course, List of Chapters along with summary for each chapter,Topic list in each chapter in JSON format'
//Generate Course Layout using AI
const aiResp=await courseOutlineAiModel.sendMessage(Prompt);
const aiResult=await JSON.parse(aiResp.response.text());

//Save the result along with User Input
const dbResult=await db?.insert(STUDY_MATERIAL_TABLE).values({
    courseId:courseId,
    courseType:courseType,
    createdBy:createdBy,
    topic:topic,
    courseLayout:aiResult
}).returning({resp:STUDY_MATERIAL_TABLE});
console.log(dbResult)
return NextResponse.json({result:dbResult[0]});
}