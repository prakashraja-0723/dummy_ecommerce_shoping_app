import Image from "next/image";
import Link from "next/link";
import BOOTIQ_white_logo from "./assets/svg/BOOTIQ_white.svg";

export default function Index() {
  return (
    <>
      <main
        className={` bg-hero-gradient bg-center bg-cover h-screen w-screen overflow-hidden`}
      >
        <Image
          src={BOOTIQ_white_logo}
          alt={`BooTiq logo`}
          className={`relative left-1/2 -translate-x-1/2 top-2`}
        />
        <div className={`relative h-screen overflow-hidden `}>
          <div className={`absolute top-1/2 -translate-y-1/3 -rotate-12 w-[115%] left-1/2 -translate-x-1/2`}>
            <div className={`w-full h-[110px] bg-highlight-1 `}></div>
            <div className={`w-full h-[110px] bg-highlight-2 `}></div>
          </div>
        </div>
        <div className={`w-screen h-fit top-1/2 text-white absolute`}>
          <div className={`flex items-center justify-center flex-col gap-2`}>
            <span
              className={`text-xl uppercase bg-black w-fit h-10 px-2 py-1.5 leading-none`}
            >
              <span className={`text-primary`}>New&nbsp;</span>summer
            </span>
            <span
              className={`text-3xl uppercase bg-black w-fit h-12 px-3 py-2 leading-none text-primary`}
            >
              collection
            </span>
            <p className={`text-center w-8/12`}>Get the hottest look this summer with the latest trends.</p>
          </div>
        <Link href={'/sign_in'} className={`w-6/12 h-10 bg-primary rounded-full flex items-center justify-center uppercase text-black font-semibold mt-24 relative left-1/2 -translate-x-1/2`}>sign in</Link>
        </div>
      </main>
    </>
  );
}
