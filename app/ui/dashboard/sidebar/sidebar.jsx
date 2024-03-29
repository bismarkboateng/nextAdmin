import Image from "next/image";
import { MdLogout } from "react-icons/md";

import { menuItems } from "@/lib/data";
import MenuLink from "./menuLink/menuLink";

export default function Sidebar() {
  return (
    <aside className="sticky top-10">
      <div className="flex items-center gap-5 mb-5">
        <Image
         src="/noavatar.png"
         alt="avatar"
         width={50}
         height={50}
         className="rounded-full"
        />
        <div className="flex flex-col">
          <span className="font-bold">John Doe</span>
          <span className="text-xs text-[#b7bac1]">Administrator</span>
        </div>
      </div>
      <ul className="list-none">
        {menuItems.map((category) => (
          <li key={category.title}>
            <span className="text-[#b7bac1] font-bold text-xs my-5">{category.title}</span>
            {category.list.map((item) => (
              <MenuLink key={item.title} item={item} />
            ))}
          </li>
        ))}
      </ul>
      <button className="p-5 my-1 flex items-center gap-5 cursor-pointer bg-none border-none w-full
      text-white hover:bg-[#2e374a]">
       <MdLogout />
       Logout
      </button>
    </aside>
  );
}
