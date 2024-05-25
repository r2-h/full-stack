"use client"
import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navLinks = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/posts",
    label: "Posts",
  },
  {
    href: "/create-post",
    label: "Create post",
  },
]

export const Navigation = () => {
  const pathname = usePathname()

  return navLinks.map((link) => (
    <li key={link.href}>
      <Link className={clsx(pathname === link.href ? "text-zinc-900" : "text-zinc-400")} href={link.href}>
        {link.label}
      </Link>
    </li>
  ))
}
