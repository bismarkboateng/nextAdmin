import React from "react";

export default function AddProductPage() {
  const inputStyles =
    "p-[30px] w-[45%] bg-transparent text-white rounded-md mb-8 border-2 border-[#2e374a] outline-none";
  return (
    <section className="bg-[#182237] p-5 rounded-md mt-5">
      <form action="" className="flex flex-wrap justify-between">
        <input
          className={inputStyles}
          type="text"
          placeholder="title"
          name="title"
          required
        />
        <select
          name="category"
          id="category"
          className="p-[30px] bg-transparent rounded-md mb-8 border-2 border-[#2e374a]
        outline-none w-[45%]"
        >
          <option value="general">Choose a category</option>
          <option value="kitchen">Kitchen</option>
          <option value="phone">Phone</option>
          <option value="computer">Computer</option>
        </select>
        <input
          className={inputStyles}
          type="number"
          placeholder="price"
          name="price"
        />
        <input
          className={inputStyles}
          type="number"
          placeholder="stock"
          name="stock"
        />
        <input
          className={inputStyles}
          type="text"
          placeholder="color"
          name="color"
        />
        <input
          className={inputStyles}
          type="text"
          placeholder="size"
          name="size"
        />
        <textarea
          name="desc"
          id="desc"
          rows="10"
          placeholder="Description"
          className="p-[30px] w-full bg-transparent rounded-md mb-8 border-2 border-[#2e374a] outline-none"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-teal-500 text-white p-5 rounded-md
         cursor-pointer"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
