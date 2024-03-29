import Image from "next/image"

export default function Transactions() {
  const tabelData = "p-[10px]"
  const isPendingStyle = "bg-[#f7cb7375]"
  const isDoneStyle = "bg-[#afd6ee75]"
  const isCancelledStyle = "bg-[#f7737375]"

  return (
    <section className="bg-[#182237] p-5 rounded-xl">
     <h2 className="mb-5 font-extralight text-[#b7bac1]">Latest Transactions</h2>
     <table className="w-full">
      <thead>
        <tr>
          <td className={tabelData}>Name</td>
          <td className={tabelData}>Status</td>
          <td className={tabelData}>Date</td>
          <td className={tabelData}>Amount</td>
        </tr>
      </thead>
      <tbody>
       <tr>
        <td className={tabelData}>
          <div className="flex gap-5 items-center">
            <Image
            src="/noavatar.png"
            alt=""
            width={40}
            height={40}
            className="object-cover rounded-full"
            />
            John Doe
          </div>
        </td>
        <td className={tabelData}>
          <span className={`${isPendingStyle} rounded-md p-2 text-sm text-white`}>Pending</span>
        </td>
        <td className={tabelData}>12.02.2024</td>
        <td className={tabelData}>$3.200</td>
       </tr>

       <tr>
        <td className={tabelData}>
          <div className="flex gap-5 items-center">
            <Image
            src="/noavatar.png"
            alt=""
            width={40}
            height={40}
            className="object-cover rounded-full"
            />
            John Doe
          </div>
        </td>
        <td className={tabelData}>
          <span className={`${isDoneStyle} rounded-md p-2 text-sm text-white`}>Done</span>
        </td>
        <td className={tabelData}>12.02.2024</td>
        <td className={tabelData}>$3.200</td>
       </tr>


       <tr>
        <td className={tabelData}>
          <div className="flex gap-5 items-center">
            <Image
            src="/noavatar.png"
            alt=""
            width={40}
            height={40}
            className="object-cover rounded-full"
            />
            John Doe
          </div>
        </td>
        <td className={tabelData}>
          <span className={`${isCancelledStyle} rounded-md p-2 text-sm text-white`}>Cancelled</span>
        </td>
        <td className={tabelData}>12.02.2024</td>
        <td className={tabelData}>$4.200</td>
       </tr>
      </tbody>
     </table>
    </section>
  )
}
