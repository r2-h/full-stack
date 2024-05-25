"use server"
import prisma from "@/lib/db"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { z } from "zod"

const postSchema = z.object({
  title: z.string().min(4, "Title is required").max(20, "Title must be between 4 and 6 characters"),
  body: z
    .string()
    .min(1, "Body content is required")
    .max(1000, "Body content must be 1000 characters or less"),
})

export default async function createPost(formData: FormData) {
  const { isAuthenticated } = getKindeServerSession()
  if (!(await isAuthenticated)) {
    return redirect("/api/auth/login")
  }

  const title = formData.get("title")
  const body = formData.get("body")

  const result = postSchema.safeParse({ title, body })
  if (!result.success) {
    console.error(result.error.errors)
    return
  }

  await prisma.post.create({
    data: {
      title: result.data.title,
      body: result.data.body,
    },
  })

  revalidatePath("/posts")
}
