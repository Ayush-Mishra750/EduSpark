import { db } from "@/configs/db";
import { inngest } from "./client";
import { STUDY_MATERIAL_TABLE, USER_TABLE } from "@/configs/schema";
import { eq } from "drizzle-orm";
import { courseOutlineAiModel } from "@/configs/AiModel";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("wait-a-moment", "1s");
    return { message: `Hello ${event.data.email}!` };
  }
);

export const CreateNewUser = inngest.createFunction(
  { id: "create-user" },
  { event: "user.create" },
  async ({ event, step }) => {
    // console.log(event ,step);
    const {user}=event.data;
    //Get event data
    const result = await step.run(
      "Check user and create new user in DB",
      async () => {
        //check Is user already Exist
        const result = await db
          .select()
          .from(USER_TABLE)
          .where(eq(USER_TABLE.email, user?.primaryEmailAddress?.emailAddress));
        if (result?.length == 0) {
          //If not ,then add to DB
          await db
            .insert(USER_TABLE)
            .values({
              name: user?.fullName,
              email: user?.primaryEmailAddress?.emailAddress,
            })
            .returning({ id: USER_TABLE.id });
          return result;
        }
        return result;
      }
    );
    return 'Success';
  }
  //step to send welcome email  notifications
  
  //step to send  email notifications after 3 days Once user join
);
export const GenerateCourse=inngest.createFunction(
   { id: "create-user" },
  { event: "user.create" },
  async ({event, step})=>{
    const {courseId,topic,difficultyLevel,courseType,createdBy}=event.data;
    const dbStepResult = await step.run(
      "Add User Input to DB",async()=>{
const dbResult=await db.insert(STUDY_MATERIAL_TABLE).values({
   courseId:courseId,
   topic:topic,
   difficultyLevel:difficultyLevel,
   courseType:courseType,
    createdBy:createdBy,
}).returning({id:STUDY_MATERIAL_TABLE.id})

return dbResult;
      }
    )
    console.log("dbStepResult",dbStepResult);
    //Make Ai Api call to generate course outline
    return dbStepResult;
  }
)
