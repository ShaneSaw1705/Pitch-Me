import { thread } from "@prisma/client";
import Thread from "@/components/thread";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function Home() {
  const posts: thread[] = await prisma.thread.findMany();
  return (
    <div className="flex flex-col items-center justify-start w-screen">
      <h1 className="text-2xl">Threads</h1>
      <div className="flex flex-col gap-3 w-full">
        {posts.map((thread) => (
          <Thread key={thread.id} post={thread} />
        ))}
      </div>
    </div>
  );
}
