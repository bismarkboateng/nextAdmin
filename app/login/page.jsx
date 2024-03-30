import { authenticate } from "@/lib/actions";

export default function LoginPage() {
  const inputStyles = "p-[30px] border-2 border-[#2e374a] rounded-md bg-[#182237] text-white outline-none"
  return (
    <section className="w-full h-[100vh] flex items-center justify-center">
      <form action={authenticate} className="bg-[#182237] p-[50px] rounded-md w-[500px] h-[500px]
      flex flex-col justify-center gap-8">
        <h1 className="text-center text-3xl font-extrabold">Login</h1>
        <input type="text" name="username" placeholder="username" className={inputStyles} />
        <input type="password" name="password" placeholder="password" className={inputStyles} />
        <button type="submit" className="bg-teal-500 border-none text-white rounded-md cursor-ponter
        p-5">Login</button>
      </form>
    </section>
  );
}
