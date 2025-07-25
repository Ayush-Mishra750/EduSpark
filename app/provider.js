"use client";
import { USER_TABLE } from "@/configs/schema";
import { useUser } from "@clerk/nextjs";
import React, { useEffect } from "react";
import { db } from "@/configs/db";
import { eq } from "drizzle-orm";
import axios from "axios";

//This provider create by me

function Provider({ children }) {
  const { user } = useUser();

  useEffect(() => {
    user && CheckIsNewUser();
  }, []);

 const CheckIsNewUser = async () => {
    //check is user already exist
  //   const result = await db
  //     .select()
  //     .from(USER_TABLE)
  //     .where(eq(USER_TABLE.email, user?.primaryEmailAddress?.emailAddress));
  //   // console.log(result);
  //   if (result?.length == 0) {
  //     //If not ,then add to DB
  //     await db
  //       .insert(USER_TABLE)
  //       .values({
  //         name: user?.fullName,
  //         email: user?.primaryEmailAddress?.emailAddress,
  //       })
  //       .returning({ id: USER_TABLE.id });
  //   //   console.log(userResp());
  //   }
  const resp=await axios.post('/api/create-user',{user:user});
  // console.log(resp)
  return resp.data;
  };

  return <div>{children}</div>;
}

export default Provider;
