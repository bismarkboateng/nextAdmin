import Link from "next/link";
import Image from "next/image";
import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";

export default function ProductPage() {
  const tdStyles = "p-[10px]"
  return (
    <section className="bg-[#182237] p-5 rounded-md mt-5">
      <div className="flex flex-row items-center justify-between">
        <Search placeholder="Search for a product" />
        <Link href="/dashboard/product/add">
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
            <td className={tdStyles}>Title</td>
            <td className={tdStyles}>Description</td>
            <td className={tdStyles}>Price</td>
            <td className={tdStyles}>Created At</td>
            <td className={tdStyles}>Stock</td>
            <td className={tdStyles}>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={tdStyles}>
              <div className="flex items-center gap-3">
                <Image
                  src="/noproduct.jpg"
                  alt="product image"
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
                IPhone
              </div>
            </td>
            <td className={tdStyles}>Desc</td>
            <td className={tdStyles}>$999</td>
            <td className={tdStyles}>14.04.2024</td>
            <td className={tdStyles}>72</td>
            <td className={`${tdStyles} flex items-center gap-3`}>
              <Link href="">
               <button className={`py-[5px] px-[10px] rounded-[5px] text-white border-none
               cursor-pointer bg-teal-500`}>View</button>
              </Link>
              <Link href="">
               <button className={`py-[5px] px-[10px] rounded-[5px] text-white border-none
               cursor-pointer bg-red-500`}>Delete</button>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </section>
  );
}
