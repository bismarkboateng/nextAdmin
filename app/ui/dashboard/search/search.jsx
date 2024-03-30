"use client"

import { MdSearch } from "react-icons/md"
import { useSearchParams, usePathname, useRouter} from "next/navigation"


export default function Search({ placeholder }) {
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const pathname = usePathname()

  
  const handleSearch = (event) => {
    const params = new URLSearchParams(searchParams)
    if (event.target.value) {
      params.set("q", event.target.value)
    } else {
      params.delete("q")
    }
    replace(`${pathname}?${params}`)
  }

  return (
    <div className="flex items-center gap-3 bg-[#2e374a] p-3 rounded-md">
     <MdSearch />
     <input
      type="text"
      placeholder={placeholder}
      className="transparent border-none text-[#b7bac1] bg-transparent outline-none"
      onChange={handleSearch}
     />
   </div>
  )
}
