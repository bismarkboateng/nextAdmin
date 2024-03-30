import Image from "next/image"

export default function ProductDetailPage() {
  
  const inputStyles = "p-5 border-2 border-[#2e374a] rounded-md bg-[#151c2c] text-white outline-none"
  return (
    <section className="flex mt-5">
     <div className="basis-1/4 bg-[#182237] p-5 rounded-md text-[#b7bac1]">
      <div className="w-full h-[200px] relative rounded-md overflow-hidden">
        <Image src="/noavatar.png" alt="avatar image" fill />
      </div>
      <p className="mt-3 font-bold">IPhone</p>
     </div>
     <div className="basis-3/4 bg-[#182237] p-5 rounded-md">
      <form action="" className="flex flex-col">
        <label className="text-sm">Title</label>
        <input type="text" name="title" placeholder="John Doe" className={inputStyles} />

        <label className="mt-5 text-sm">Price</label>
        <input type="number" name="price" placeholder="price" className={inputStyles} />

        <label className="mt-5 text-sm">Stock</label>
        <input type="number" name="stock" className={inputStyles} />

        <label className="mt-5 text-sm">Color</label>
        <input type="text" name="color" placeholder="" className={inputStyles} />

        <label className="mt-5 text-sm">Size</label>
        <textarea type="text" name="size" placeholder=""
        className="p-5 border-2 border-[#2e374a] rounded-md bg-[#151c2c] text-white outline-none" />

        <label className="mt-5 text-sm">Category</label>
        <select name="category" id="category"
        className="p-5 border-2 border-[#2e374a] rounded-md bg-[#151c2c] text-white outline-none">
            <option value="Kitchen">Kitchen</option>
            <option value="Computer">Computer</option>
        </select>
        <label className="mt-5 text-sm">Description</label>
        <textarea name="desc" id="desc" rows="10" placeholder="description"
        className="p-5 border-2 border-[#2e374a] rounded-md bg-[#151c2c] text-white outline-none"></textarea>
        <button type="submit" className="w-full p-5 bg-teal-500 mt-4 rounded-md border-none">Update</button>
      </form>
     </div>
    </section>
  )
}
