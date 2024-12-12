"use client";
import { SinglePost } from "@/components";
import { useParams } from "next/navigation";

export default async function Home() {
  const params = useParams();

  const result = await fetch(`https://dev.to/api/articles/${params.id}`);
  const posts = await result.json();

  return (
    <div className="flex flex-col justify-center items-center">
      <SinglePost data={posts} />
    </div>
  );
}
