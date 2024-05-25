export const Post = async ({ id }: { id: string }) => {
  await new Promise((res) => setTimeout(res, 2000))

  const response = await fetch(`https://dummyjson.com/posts/${id}`)
  const data = await response.json()

  return (
    <>
      <h1 className="text-center text-4xl md:text-5xl font-bold mb-5">{data.title}</h1>
      <p>{data.body}</p>
    </>
  )
}
