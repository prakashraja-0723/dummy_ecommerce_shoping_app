import React from "react";
import Image from "next/image";
import images_1 from '@/app/assets/images/Fashion_Forward_How_to_Style_Your_B3_Bomber_Leather_Jacket.jpg'
import images_2 from '@/app/assets/images/-original-imagu8ryyjz7qajh.jpeg'
import images_3 from '@/app/assets/images/living-in-a-dream-pastel-blue-floral-print-maxi-skirt-780387.jpg'
import Link from "next/link";


export default function Trends() {
  return (
    <>
      <div className={`font-semibold text-2xl w-full`}>
        <h1 className={`text-center`}>Explore Our New Arrivals</h1>
        <p className={`text-center text-base w-6/12 mx-auto mt-3 font-medium`}>
          Explore our diverse range of fashion offerings, conveniently organized into categories to suit your style preferences.
        </p>
      </div>
      <div className={`mt-6 grid grid-flow-row lg:grid-cols-3 place-items-center gap-6 lg:gap-0`}>
        <div className={`w-[300px] h-96 lg:w-9/12 lg:h-[341px] xl:h-[426px]  2xl:h-[512px] rounded-lg overflow-hidden transition-all duration-300 relative shadow`}>
          <span className={`bg-amber-400 absolute -rotate-45 w-28 lg:w-32 h-6 lg:h-10 -left-8 top-3 flex items-center justify-center pb-[3px] font-semibold text-xs lg:text-base uppercase`}>15%-off</span>
          <Link href={'/home'} className={`absolute w-full h-full bg-transparent *:-bottom-10 *:absolute *:hover:bottom-8 cursor-pointer`}>
          </Link>
          <div className={` hidden lg:block absolute w-full h-full bg-transparent *:-bottom-10 *:absolute *:hover:bottom-8 cursor-pointer`}>
            <Link href={'/home'} className={`bg-primary shadow w-3/12 lg:w-4/12 h-6 lg:h-8 rounded-full text-xs lg:text-base uppercase font-semibold flex items-center justify-center left-1/2 -translate-x-1/2 transition-all duration-500`}>Buy</Link>
          </div>
          <div className={`w-full h-full transition-all duration-200`}>
            <Image src={images_1} alt={``} className={`w-full h-full object-cover`}/>
          </div>
        </div>
        
        <div className={`w-[300px] h-96 lg:w-9/12 lg:h-[341px] xl:h-[426px]  2xl:h-[512px] rounded-lg overflow-hidden transition-all duration-300 relative shadow`}>
          <span className={`bg-amber-400 absolute -rotate-45 w-28 lg:w-32 h-6 lg:h-10 -left-8 top-3 flex items-center justify-center pb-[3px] font-semibold text-xs lg:text-base uppercase`}>15%-off</span>
          <Link href={'/home'} className={`absolute w-full h-full bg-transparent *:-bottom-10 *:absolute *:hover:bottom-8 cursor-pointer`}>
          </Link>
          <div className={` hidden lg:block absolute w-full h-full bg-transparent *:-bottom-10 *:absolute *:hover:bottom-8 cursor-pointer`}>
            <Link href={'/home'} className={`bg-primary shadow w-3/12 lg:w-4/12 h-6 lg:h-8 rounded-full text-xs lg:text-base uppercase font-semibold flex items-center justify-center left-1/2 -translate-x-1/2 transition-all duration-500`}>Buy</Link>
          </div>
          <div className={`w-full h-full transition-all duration-200`}>
            <Image src={images_2} alt={``} className={`w-full h-full object-fill`}/>
          </div>
        </div>
        
        <div className={`w-[300px] h-96 lg:w-9/12 lg:h-[341px] xl:h-[426px]  2xl:h-[512px] rounded-lg overflow-hidden transition-all duration-300 relative shadow`}>
          <span className={`bg-amber-400 absolute -rotate-45 w-28 lg:w-32 h-6 lg:h-10 -left-8 top-3 flex items-center justify-center pb-[3px] font-semibold text-xs lg:text-base uppercase`}>15%-off</span>
          <Link href={'/home'} className={`absolute w-full h-full bg-transparent *:-bottom-10 *:absolute *:hover:bottom-8 cursor-pointer`}>
          </Link>
          <div className={` hidden lg:block absolute w-full h-full bg-transparent *:-bottom-10 *:absolute *:hover:bottom-8 cursor-pointer`}>
            <Link href={'/home'} className={`bg-primary shadow w-3/12 lg:w-4/12 h-6 lg:h-8 rounded-full text-xs lg:text-base uppercase font-semibold flex items-center justify-center left-1/2 -translate-x-1/2 transition-all duration-500`}>Buy</Link>
          </div>
          <div className={`w-full transition-all duration-200`}>
            <Image src={images_3} alt={``} className={`w-full object-cover`}/>
          </div>
        </div>
      </div>
    </>
  );
}
