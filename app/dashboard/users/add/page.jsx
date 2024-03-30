

export default function AddUsersPage() {
  const inputStyles =
    "p-[30px] w-[45%] bg-transparent text-white rounded-md mb-8 border-2 border-[#2e374a] outline-none bg-[#151c2c]";
  return (
    <section className="bg-[#182237] p-5 rounded-md mt-5">
      <form action="" className="flex flex-wrap justify-between">
        <input
          className={inputStyles}
          type="text"
          placeholder="username"
          name="username"
          required
        />
        <input
          className={inputStyles}
          type="email"
          placeholder="email"
          name="email"
          required
        />
        <input
          className={inputStyles}
          type="password"
          placeholder="password"
          name="password"
          required
        />
        <input
          className={inputStyles}
          type="text"
          placeholder="phone"
          name="phone"
        />
        <select
          name="isAdmin"
          id="isAdmin"
          className="p-[30px] bg-transparent rounded-md mb-8 border-2 border-[#2e374a]
        outline-none w-[45%] bg-[#151c2c]"
        >
          <option value={false} selected>isAdmin?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <select
          name="isActive"
          id="isActive"
          className="p-[30px] bg-transparent rounded-md mb-8 border-2 border-[#2e374a]
        outline-none w-[45%] bg-[#151c2c]"
        >
          <option value={true} selected>isActive?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <textarea
          name="address"
          id="address"
          rows="10"
          placeholder="Address"
          className="p-[30px] w-full bg-transparent rounded-md mb-8 border-2 border-[#2e374a] outline-none
          bg-[#151c2c]"
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
