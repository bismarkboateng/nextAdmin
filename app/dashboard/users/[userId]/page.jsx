import { updateUser } from "@/lib/actions"
import { fetchUser } from "@/lib/fetchData"
import Image from "next/image"

export default async function UserDetailPage({ params }) {
  const { id } = params 

  const user = await fetchUser(id)
  
  const inputStyles = "p-5 border-2 border-[#2e374a] rounded-md bg-[#151c2c] text-white outline-none"
  return (
    <section className="flex mt-5">
     <div className="basis-1/4 bg-[#182237] p-5 rounded-md text-[#b7bac1]">
      <div className="w-full h-[200px] relative rounded-md overflow-hidden">
        <Image src={user?.img || "/noavatar.png"} alt="avatar image" fill />
      </div>
      <p className="mt-3 font-bold">{user?.username}</p>
     </div>
     <div className="basis-3/4 bg-[#182237] p-5 rounded-md">
      <form action={updateUser} className="flex flex-col">
        <input type="hidden" name="id" value={user?.id} />
        <label className="text-sm">Username</label>
        <input type="text" name="username" placeholder={user?.username} className={inputStyles} />

        <label className="mt-5 text-sm">Email</label>
        <input type="email" name="email" placeholder={user?.email} className={inputStyles} />

        <label className="mt-5 text-sm">Password</label>
        <input type="password" name="password" className={inputStyles} />

        <label className="mt-5 text-sm">Phone</label>
        <input type="text" name="phone" placeholder={user?.phone} className={inputStyles} />

        <label className="mt-5 text-sm">Address</label>
        <textarea type="text" name="address" placeholder={user?.address}
        className="p-5 border-2 border-[#2e374a] rounded-md bg-[#151c2c] text-white outline-none" />

        <label className="mt-5 text-sm">isAdmin?</label>
        <select name="isAdmin" id="isAdmin"
        className="p-5 border-2 border-[#2e374a] rounded-md bg-[#151c2c] text-white outline-none">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
        </select>

        <label className="mt-5 text-sm">isActive?</label>
        <select name="isActive" id="isActive"
        className="p-5 border-2 border-[#2e374a] rounded-md bg-[#151c2c] text-white outline-none">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
        </select>
        <button type="submit" className="w-full p-5 bg-teal-500 mt-4 rounded-md border-none">Update</button>
      </form>
     </div>
    </section>
  )
}
