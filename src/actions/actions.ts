"use server"
import { z } from "zod"

const postSchema = z.object({
  title: z.string().min(4, "Title is required").max(6, "Title must be between 4 and 6 characters"),
  body: z
    .string()
    .min(1, "Body content is required")
    .max(1000, "Body content must be 1000 characters or less"),
})

export default async function createPost(formData: FormData) {
  const title = formData.get("title")
  const body = formData.get("body")

  const result = postSchema.safeParse({ title, body })
  if (!result.success) {
    console.error(result.error.errors)

    return
  }
  console.log(result.data)
}
