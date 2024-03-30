import Link from "next/link";
import Image from "next/image";
import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { fetchUsers } from "@/lib/fetchData";




export default async function UsersPage({ searchParams }) {
  const q = searchParams?.query || ""
  const page = searchParams?.page || 1
  const {count, users} = await fetchUsers(q, page)

  console.log(users)

  const tdStyles = "p-[10px]"

  return (
    <section className="bg-[#182237] p-5 rounded-md mt-5">
      <div className="flex flex-row items-center justify-between">
        <Search placeholder="Search for a user" />
        <Link href="/dashboard/users/add">
          <button
            className="p-3 bg-[#5d57c9] text-white border-none rounded-md
        cursor-pointer"
          >
            Add New
          </button>
        </Link>
      </div>
      <table className="w-full mt-5">
        <thead>
          <tr>
            <td className={tdStyles}>Name</td>
            <td className={tdStyles}>Email</td>
            <td className={tdStyles}>Created At</td>
            <td className={tdStyles}>Role</td>
            <td className={tdStyles}>Status</td>
            <td className={tdStyles}>Action</td>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr>
              <td className={tdStyles}>
                <div className="flex items-center gap-3">
                  <Image
                    src={user.img || "/noavatar.png"}
                    alt="user image"
                    width={30}
                    height={30}
                    className="rounded-full object-cover"
                  />
                  {user.username}
                </div>
              </td>
              <td className={tdStyles}>{user.email}</td>
              <td className={tdStyles}>{user.createdAt?.toString().slice(4, 16)}</td>
              <td className={tdStyles}>{user.isAdmin ? "Admin" : "Client" }</td>
              <td className={tdStyles}>{user.isActive ? "Active" : "Not Active"}</td>
              <td className={`${tdStyles} flex items-center gap-3`}>
                <Link href={`/dashboard/users/${user.id}`}>
                  <button className={`py-[5px] px-[10px] rounded-[5px] text-white border-none
                  cursor-pointer bg-teal-500`}>View</button>
                </Link>
                <Link href="">
                  <button className={`py-[5px] px-[10px] rounded-[5px] text-white border-none
                  cursor-pointer bg-red-500`}>Delete</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </section>
  );
}
