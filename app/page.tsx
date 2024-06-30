import Thread from "@/components/thread";


export default async function Home() {
  const res = await fetch("http://localhost:3000/api/getthreads", {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  const json = await res.json();
  return (
    <div className="flex flex-col items-center justify-start w-screen m-auto">
      <h1 className="text-2xl">Threads</h1>
      <div className="flex flex-col gap-3 w-full">
        {json.map((thread: any) => (
          <Thread key={thread.id} post={thread} />
        ))}
      </div>
    </div>
  );
}
