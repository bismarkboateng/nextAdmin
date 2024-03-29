import { MdSupervisedUserCircle } from "react-icons/md"



export default function Card() {
  return (
    <section className="bg-[#182237] p-5 rounded-xl flex gap-5 cursor-pointer w-full
    hover:bg-[#2e374a]">
     <MdSupervisedUserCircle fontSize={24} />
     <div className="flex flex-col gap-5">
      <span>Total Users</span>
      <span className="text-2xl font-medium">10.273</span>
      <span className="text-sm font-light">
       <span className="text-lime-500">12% </span> more than previous week
      </span>
     </div>
    </section>
  )
}
