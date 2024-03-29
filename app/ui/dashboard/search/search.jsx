import { MdSearch } from "react-icons/md"


export default function Search({ placeholder }) {
  return (
    <div className="flex items-center gap-3 bg-[#2e374a] p-3 rounded-md">
     <MdSearch />
     <input
      type="text"
      placeholder={placeholder}
      className="transparent border-none text-[#b7bac1] bg-transparent outline-none"
     />
   </div>
  )
}
