import { inngest } from "@/inngest/client";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const {user}=await req.json();
         if (!user) throw new Error("No user data provided");
        console.log(user);
    
        const result=await inngest.send({
            name:'user.create',
            data:{
                user
            }
        })
            return NextResponse.json({result:result})
    } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: error.message || "Server error" }, { status: 500 });
  }
    console.log(result)

}