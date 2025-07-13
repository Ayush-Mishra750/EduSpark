import { inngest } from "@/inngest/client";
import { NextResponse } from "next/server";

export async function POST(req) {
    const {user}=await req.json();

    const result=await inngest.send({
        name:'user.create',
        data:{
            user:user
        }
    })
    console.log(result)
    return NextResponse.json({result:result})
}