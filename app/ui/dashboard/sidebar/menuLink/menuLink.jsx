"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function MenuLink({item}) {
  const pathname = usePathname()

  return (
    <Link href={item.path} className={`${pathname.split().pop() == item.path && "bg-[#2e374a]" }
    flex items-center gap-3 p-5 hover:bg-[#2e374a] rounded-md`}>
      {item.icon}
      {item.title}
    </Link>
  )
}