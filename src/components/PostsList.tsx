import Link from "next/link"

export const PostsList = async () => {
  await new Promise((res) => setTimeout(res, 2000))
  const response = await fetch("https://dummyjson.com/posts?limit=10")
  const data = await response.json()

  return (
    <ul className="space-y-5 text-center">
      {data.posts.map((post: any) => (
        <li key={post.id}>
          <Link href={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  )
}
