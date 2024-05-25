import { PostsList } from "@/components/PostsList"
import { Suspense } from "react"

export default async function Postspage() {
  return (
    <main className="pt-32 px-5  mx-auto">
      <h1 className="text-center text-4xl md:text-5xl font-bold mb-5">All posts</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <PostsList />
      </Suspense>
    </main>
  )
}
