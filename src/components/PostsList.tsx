import prisma from "@/lib/db"
import Link from "next/link"

export const PostsList = async () => {
  await new Promise((res) => setTimeout(res, 2000))
  const posts = await prisma.post.findMany()

  return (
    <ul className="space-y-5 text-center">
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  )
}
