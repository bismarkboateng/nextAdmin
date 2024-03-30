"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function Pagination({ count }) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const page = searchParams.get("page");
  const params = new URLSearchParams(searchParams);
  const ITEM_PER_PAGE = 2;
  const hasPrev = ITEM_PER_PAGE * (parseInt(page) - 1) > 0;
  const hasNext = ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE < count;

  const handleChangePage = (type) => {
    type === "prev"
      ? params.set("page", parseInt(page) - 1)
      : params.set("page", parseInt(page) + 1);
    replace(`${pathname}?${params}`);
  }; 

  const buttonStyles = `py-[5px] px-[10px] cursor-pointer disabled:cursor-not-allowed
  disabled:bg-gray-300 disabled:text-white disabled:rounded-md`;

  return (
    <section className="p-3 flex justify-between">
      <button
        className={buttonStyles}
        disabled={!hasPrev}
        onClick={() => handleChangePage("prev")}
      >
        Previous
      </button>
      <button
        className={buttonStyles}
        disabled={!hasNext}
        onClick={() => handleChangePage("next")}
      >
        Next
      </button>
    </section>
  );
}
