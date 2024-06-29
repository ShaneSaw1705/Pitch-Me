import { thread } from "@prisma/client";
import Thread from "@/components/thread";
import axios from "axios";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function Home() {
  const res = await fetch("http://localhost:3000/api/getthreads", {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  const json = await res.json();
  return (
    <div className="flex flex-col items-center justify-start w-screen">
      <h1 className="text-2xl">Threads</h1>
      <div className="flex flex-col gap-3 w-full">
        {json.map((thread: any) => (
          <Thread key={thread.id} post={thread} />
        ))}
      </div>
    </div>
  );
}
