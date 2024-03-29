import Image from "next/image";

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
    </aside>
  );
}
