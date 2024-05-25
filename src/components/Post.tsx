import prisma from "@/lib/db"

export const Post = async ({ id }: { id: string }) => {
  await new Promise((res) => setTimeout(res, 2000))

  const post = await prisma.post.findUnique({ where: { id: Number(id) } })

  return (
    <>
      <h1 className="text-center text-4xl md:text-5xl font-bold mb-5">{post?.title}</h1>
      <p className="text-center">{post?.body}</p>
    </>
  )
}
