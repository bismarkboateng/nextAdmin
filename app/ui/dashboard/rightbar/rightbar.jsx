import Image from "next/image"
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md"

export default function Rightbar() {
  return (
    <section className="fixed">
      <div className="relative bg-gradient-to-b from-[#182237] to-[#253352] p-5 rounded-xl mb-5
      opacity-90">
        <div className="absolute z-[-30] bottom-20 right-0 w-[50%] h-[50%]">
          <Image src="/astronaut.png" alt="astronaut" fill className="object-contain opacity-20" />
        </div>
        <div className="flex flex-col gap-5">
          <span className="font-bold">🔥 Available Now</span>
          <h3 className="font-extrabold">How to use the new version of the admin dashboard</h3>
          <span className="font-medium text-xs text-[#b7bac1]">Take 4 minutes to learn</span>
          <p className="font-medium text-xs text-[#b7bac1]">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Officia praesentium assumenda facere sit quas dolore incidunt
            debitis illum inventore nostrum a, quidem, quod odio atque.
            Dolorem blanditiis officia atque maxime!
          </p>
          <button className="flex items-center gap-2 bg-[#5d57c9] text-white border-none
          rounded-md cursor-pointer max-w-max p-2">
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
      <div className="relative bg-gradient-to-b from-[#182237] to-[#253352] p-5 rounded-xl mb-5
      opacity-90">
        <div className="absolute z-[-30] bottom-0 right-0 w-[50%] h-[50%]">
          <Image src="/astronaut.png" alt="astronaut" fill className="object-contain opacity-20" />
        </div>
        <div className="flex flex-col gap-5">
          <span className="font-bold">🔥 Coming Soon</span>
          <h3 className="font-extrabold">
            New Server actions ara available, partial pre-rendering
            is coming up!
          </h3>
          <span className="font-medium text-xs text-[#b7bac1]">
            Boost your productivity
          </span>
          <p className="font-medium text-xs text-[#b7bac1]">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Officia praesentium assumenda facere sit quas dolore incidunt
            debitis illum inventore nostrum a, quidem, quod odio atque.
            Dolorem blanditiis officia atque maxime!
          </p>
          <button className="flex items-center gap-2 bg-[#5d57c9] text-white border-none
          rounded-md cursor-pointer max-w-max p-2">
            <MdReadMore />
            Learn
          </button>
        </div>
      </div>
    </section>
  )
}