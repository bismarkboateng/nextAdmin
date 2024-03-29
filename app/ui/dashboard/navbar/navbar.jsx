"use client"

import { usePathname } from "next/navigation"

import { MdSearch, MdNotifications, MdOutlineChat, MdPublic } from "react-icons/md"



export default function Navbar() {
  const pathname = usePathname()

  return (
    <section className="flex items-center justify-between p-5 rounded-md
    bg-[#182237]">
      <div className="text-[#b7bac1] font-bold capitalize">{pathname.split("/").pop()}</div>
      <div className="flex items-center gap-5">
       <div className="flex items-center gap-3 bg-[#2e374a] p-3 rounded-md">
        <MdSearch />
        <input
         type="text"
         placeholder="Search..."
         className="transparent border-none text-[#b7bac1]"
        />
       </div>
       <div className="flex">
        <MdOutlineChat fontSize={20} />
        <MdNotifications fontSize={20} />
        <MdPublic fontSize={20} />
       </div>
      </div>
    </section>
  )
}
