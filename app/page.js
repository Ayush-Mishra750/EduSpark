import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h2>hii my name is ayush mishra  and welcome to my website</h2>
  <Button>click me</Button>
  <UserButton/>
  </div>
  );
}
