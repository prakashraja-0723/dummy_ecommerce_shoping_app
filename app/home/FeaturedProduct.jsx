import React from 'react'
import Image from "next/image";

import featured_product_01 from '@/app/assets/images/fearured_product/featured_product_01.jpg'
import featured_product_02 from '@/app/assets/images/fearured_product/featured_product_02.jpg'
import featured_product_03 from '@/app/assets/images/fearured_product/featured_product_03.jpg'
import Link from "next/link";

export default function FeaturedProduct() {
	return (
		<section className={`mb-8 mt-12 lg:container lg:mx-auto`}>
			<div className={`text-center font-semibold text-2xl`}>
				<h1>Featured Products</h1>
			</div>
			{/*<div className={`mt-6 grid grid-flow-row lg:grid-flow-col place-items-center gap-6 lg:gap-0`}>*/}
			{/*	<div className={`w-[300px] h-96 lg:w-9/12 lg:h-auto rounded-lg overflow-hidden transition-all duration-300 relative shadow`}>*/}
			{/*		<span className={`bg-amber-400 absolute -rotate-45 w-28 lg:w-32 h-6 lg:h-10 -left-8 top-3 flex items-center justify-center pb-[3px] font-semibold text-xs lg:text-base uppercase`}>15%-off</span>*/}
			{/*		<Link href={'/featured-product/1'} className={`absolute w-full h-full bg-transparent *:-bottom-10 *:absolute *:hover:bottom-8 cursor-pointer`}>*/}
			{/*		</Link>*/}
			{/*		<div className={` hidden lg:block absolute w-full h-full bg-transparent *:-bottom-10 *:absolute *:hover:bottom-8 cursor-pointer`}>*/}
			{/*			<Link href={'/featured-product/1'} className={`bg-primary shadow w-3/12 lg:w-4/12 h-6 lg:h-8 rounded-full text-xs lg:text-base uppercase font-semibold flex items-center justify-center left-1/2 -translate-x-1/2 transition-all duration-500`}>Buy</Link>*/}
			{/*		</div>*/}
			{/*		<div className={`w-full h-full transition-all duration-200`}>*/}
			{/*			<Image src={featured_product_01} alt={``} className={`w-full h-full object-fill`}/>*/}
			{/*		</div>*/}
			{/*	</div>*/}
			{/*	*/}
			{/*	<div className={`w-[300px] h-96 lg:w-9/12 lg:h-auto rounded-lg overflow-hidden transition-all duration-300 relative shadow`}>*/}
			{/*		<span className={`bg-amber-400 absolute -rotate-45 w-28 lg:w-32 h-6 lg:h-10 -left-8 top-3 flex items-center justify-center pb-[3px] font-semibold text-xs lg:text-base uppercase`}>15%-off</span>*/}
			{/*		<Link href={'/featured-product/1'} className={`absolute w-full h-full bg-transparent *:-bottom-10 *:absolute *:hover:bottom-8 cursor-pointer`}>*/}
			{/*		</Link>*/}
			{/*		<div className={` hidden lg:block absolute w-full h-full bg-transparent *:-bottom-10 *:absolute *:hover:bottom-8 cursor-pointer`}>*/}
			{/*		<Link href={'/featured-product/1'} className={`bg-primary shadow w-3/12 lg:w-4/12 h-6 lg:h-8 rounded-full text-xs lg:text-base uppercase font-semibold flex items-center justify-center left-1/2 -translate-x-1/2 transition-all duration-500`}>Buy</Link>*/}
			{/*		</div>*/}
			{/*		<div className={`w-full h-full transition-all duration-200`}>*/}
			{/*			<Image src={featured_product_02} alt={``} className={`w-full h-full object-fill`}/>*/}
			{/*		</div>*/}
			{/*	</div>*/}
			{/*	*/}
			{/*	<div className={`w-[300px] h-96 lg:w-9/12 lg:h-auto rounded-lg overflow-hidden transition-all duration-300 relative shadow`}>*/}
			{/*		<span className={`bg-amber-400 absolute -rotate-45 w-28 lg:w-32 h-6 lg:h-10 -left-8 top-3 flex items-center justify-center pb-[3px] font-semibold text-xs lg:text-base uppercase`}>15%-off</span>*/}
			{/*		<Link href={'/featured-product/1'} className={`absolute w-full h-full bg-transparent *:-bottom-10 *:absolute *:hover:bottom-8 cursor-pointer`}>*/}
			{/*		</Link>*/}
			{/*		<div className={` hidden lg:block absolute w-full h-full bg-transparent *:-bottom-10 *:absolute *:hover:bottom-8 cursor-pointer`}>*/}
			{/*			<Link href={'/featured-product/1'} className={`bg-primary shadow w-3/12 lg:w-4/12 h-6 lg:h-8 rounded-full text-xs lg:text-base uppercase font-semibold flex items-center justify-center left-1/2 -translate-x-1/2 transition-all duration-500`}>Buy</Link>*/}
			{/*		</div>*/}
			{/*		<div className={`w-full transition-all duration-200`}>*/}
			{/*			<Image src={featured_product_03} alt={``} className={`w-full object-cover`}/>*/}
			{/*		</div>*/}
			{/*	</div>*/}
			{/*</div>*/}
			<div className={`mt-6 grid grid-flow-row lg:grid-cols-3 place-items-center gap-6 lg:gap-0`}>
				<div className={`w-[300px] h-96 lg:w-9/12 lg:h-auto  rounded-lg overflow-hidden transition-all duration-300 relative shadow`}>
					<span className={`bg-amber-400 absolute -rotate-45 w-28 lg:w-32 h-6 lg:h-10 -left-8 top-3 flex items-center justify-center pb-[3px] font-semibold text-xs lg:text-base uppercase`}>15%-off</span>
					<Link href={''} className={`absolute w-full h-full bg-transparent *:-bottom-10 *:absolute *:hover:bottom-8 cursor-pointer`}>
					</Link>
					<div className={` hidden lg:block absolute w-full h-full bg-transparent *:-bottom-10 *:absolute *:hover:bottom-8 cursor-pointer`}>
						<Link href={''} className={`bg-primary shadow w-3/12 lg:w-4/12 h-6 lg:h-8 rounded-full text-xs lg:text-base uppercase font-semibold flex items-center justify-center left-1/2 -translate-x-1/2 transition-all duration-500`}>Buy</Link>
					</div>
					<div className={`w-full h-full transition-all duration-200`}>
						<Image src={featured_product_01} alt={``} className={`w-full h-full object-fill`}/>
					</div>
				</div>
				
				<div className={`w-[300px] h-96 lg:w-9/12 lg:h-auto rounded-lg overflow-hidden transition-all duration-300 relative shadow`}>
					<span className={`bg-amber-400 absolute -rotate-45 w-28 lg:w-32 h-6 lg:h-10 -left-8 top-3 flex items-center justify-center pb-[3px] font-semibold text-xs lg:text-base uppercase`}>15%-off</span>
					<Link href={''} className={`absolute w-full h-full bg-transparent *:-bottom-10 *:absolute *:hover:bottom-8 cursor-pointer`}>
					</Link>
					<div className={` hidden lg:block absolute w-full h-full bg-transparent *:-bottom-10 *:absolute *:hover:bottom-8 cursor-pointer`}>
						<Link href={''} className={`bg-primary shadow w-3/12 lg:w-4/12 h-6 lg:h-8 rounded-full text-xs lg:text-base uppercase font-semibold flex items-center justify-center left-1/2 -translate-x-1/2 transition-all duration-500`}>Buy</Link>
					</div>
					<div className={`w-full h-full transition-all duration-200`}>
						<Image src={featured_product_02} alt={``} className={`w-full h-full object-fill`}/>
					</div>
				</div>
				
				<div className={`w-[300px] h-96 lg:w-9/12 lg:h-[341px] xl:h-[426px]  2xl:h-[512px] rounded-lg overflow-hidden transition-all duration-300 relative shadow`}>
					<span className={`bg-amber-400 absolute -rotate-45 w-28 lg:w-32 h-6 lg:h-10 -left-8 top-3 flex items-center justify-center pb-[3px] font-semibold text-xs lg:text-base uppercase`}>15%-off</span>
					<Link href={''} className={`absolute w-full h-full bg-transparent *:-bottom-10 *:absolute *:hover:bottom-8 cursor-pointer`}>
					</Link>
					<div className={` hidden lg:block absolute w-full h-full bg-transparent *:-bottom-10 *:absolute *:hover:bottom-8 cursor-pointer`}>
						<Link href={''} className={`bg-primary shadow w-3/12 lg:w-4/12 h-6 lg:h-8 rounded-full text-xs lg:text-base uppercase font-semibold flex items-center justify-center left-1/2 -translate-x-1/2 transition-all duration-500`}>Buy</Link>
					</div>
					<div className={`w-full transition-all duration-200`}>
						<Image src={featured_product_03} alt={``} className={`w-full object-cover`}/>
					</div>
				</div>
			</div>
		</section>
	)
}
