import Image from "next/image";

import FeaturedProduct from "@/app/home/FeaturedProduct";
import Hero from "@/app/home/Hero";
import Navbar from "@/app/components/navbar/Navbar";
import Footer from "@/app/components/footer/footer";
import Link from "next/link";
import Trends from "@/app/home/Trends";

export default function Home() {
  return (
    <>
      <main className={`h-full w-screen bg-gray-50`}>
	      <Navbar/>
        <Hero/>
	     <FeaturedProduct/>
	      <div className={`hidden lg:grid grid-flow-row place-items-center mb-8 mt-12 px-4 container mx-auto`}>
		      <Trends/>
	      </div>
	      <div className={`my-8 lg:mt-16 w-fit h-10 lg:h-12 bg-primary text-black text-sm font-semibold lg:text-lg flex items-center justify-center rounded-full relative left-1/2 -translate-x-1/2`}>
	      <Link href={'/home'} className={`px-5 lg:px-8`}>Back to Top</Link>
	      </div>
	      <Footer/>
      </main>
    </>
  );
}
