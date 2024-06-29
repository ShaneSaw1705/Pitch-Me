import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET(req: Request) {
  const posts = await prisma.thread.findMany();
  if (!posts) {
    return new Response("couldnt find threads", { status: 503 });
  }
  return new Response(JSON.stringify(posts), { status: 200 });
}
