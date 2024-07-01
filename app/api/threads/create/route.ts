import { ThreadData } from "@/models/thread";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


export async function GET(req: Request) {
  const thread: ThreadData = await req.json()
  if (!thread) {
    return new Response('thead data is no valid', { status: 400 })
  }
  try {
    await prisma.thread.create({
      data: thread
    })
    return new Response('success', { status: 200 })
  } catch (error) {
    return new Response('failed to push thread to the database', { status: 500 })
  }
}
