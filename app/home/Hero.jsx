import React from 'react'
import Link from "next/link";



export default function Hero() {
	return (
		<div className={`bg-hero-gradient lg:bg-hero-gradient-desktop lg:bg-cover h-screen mt-12 lg:mt-0 bg-cover px-4 relative`}>
			<div className={`relative top-1/4 lg:container lg:mx-auto lg:pl-10` }>
				<div className={`mb-5`}>
					<h1 className={`text-secondary font-bold text-3xl lg:text-4xl xl:text-5xl 2xl:text-7xl`}>
						Welcome to BootiQ
					</h1>
					<p className={`text-white text-xs lg:text-sm 2xl:text-base`}>Where Style Meets Elegance!</p>
				</div>
				<div className={`w-[343px] text-blue-50 flex flex-col gap-3 lg:w-6/12 lg:text-sm xl:text-base xl:w-6/12 2xl:w-5/12 2xl:text-lg`}>
					<p>Discover curated collections that redefine
						fashion. Your journey to timeless elegance
						starts here!</p>
					<p><span className={`text-amber-300 font-normal uppercase text-lg bg-black px-2 py-1 lg:bg-transparent lg:px-0 2xl:text-xl`}>Explore our Collections</span> and elevate
						your  wardrobe with handpicked pieces
						that redefine fashion.</p>
				</div>
				<div className={`bg-primary w-6/12 h-10 rounded-full mt-8 lg:w-fit flex items-center justify-center xl:h-12`}>
					<Link href={'/collection'} className={`w-full h-full text-black grid place-content-center px-10 font-semibold xl:text-xl`}>Explore</Link>
				</div>
			</div>
		</div>
	)
}
