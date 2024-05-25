import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "./Navigation"

export default async function Header() {
  const { getUser } = getKindeServerSession()
  const user = await getUser()

  return (
    <header className="flex justify-between items-center py-4 px-7 border-b">
      <Link href="/">
        <Image
          src="https://bytegrad.com/course-assets/youtube/example-logo.png"
          alt="Logo"
          className="w-[35px] h-[35px]"
          width="35"
          height="35"
        />
      </Link>

      <nav>
        <ul className="flex gap-x-5 text-[14px]">
          <Navigation />

          {user && (
            <Link className={"text-zinc-400"} href="/api/auth/logout">
              Sign out
            </Link>
          )}
          {!user && (
            <Link className={"text-zinc-400"} href="/api/auth/login">
              Sign in
            </Link>
          )}
        </ul>
      </nav>
    </header>
  )
}
