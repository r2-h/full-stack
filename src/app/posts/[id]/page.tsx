import { CounterButton } from "@/components/CounterButton"
import { Post } from "@/components/Post"
import { Suspense } from "react"
import { PostPageSkeleton } from "./_components/PostPageLoading"

export default async function PostPage({ params }: { params: { id: string } }) {
  return (
    <main className="pt-32 px-5  mx-auto w-full">
      <Suspense fallback={<PostPageSkeleton />}>
        <Post id={params.id} />
      </Suspense>
      <CounterButton />
    </main>
  )
}
