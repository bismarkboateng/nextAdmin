
export default function Pagination() {
  const buttonStyles = `py-[5px] px-[10px] cursor-pointer disabled:cursor-not-allowed
  disabled:bg-gray-300 disabled:text-white disabled:rounded-md`
  return (
    <section className="p-3 flex justify-between">
     <button className={buttonStyles}>Previous</button>
     <button className={buttonStyles}>Next</button>
    </section>
  )
}
