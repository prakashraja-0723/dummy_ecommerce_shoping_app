import React from 'react'
import Navbar from "@/app/components/navbar/Navbar";
import Footer from "@/app/components/footer/footer";

export default function About() {
	return (
		<>
			<div
				className={`bg-collection bg-cover min-h-[30vh] lg:h-[50vh] bg-center bg-no-repeat relative`}
			>
				<div
					className={`absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 lg:text-4xl font-bold uppercase text-white text-center text-xl w-6/12`}
				>
					<h1>About Us</h1>
					<p
						className={`text-sm w-full font-normal capitalize mx-auto mt-4 hidden lg:block`}
					>
						Discover the city in style with our Urban Explorer Collection.
						From street-chic apparel to versatile accessories, this collection
						is designed for the modern urbanite who embraces adventure.
						Unleash your bold and contemporary fashion sense with these
						trendsetting pieces. Ready to redefine your cityscape style?
					</p>
				</div>
				<Navbar />
			</div>
			<div className={`container mx-auto px-4 text-center`}>
				<h1 className={`font-bold underline mt-6 lg:mt-10 text-lg md:text-xl lg:text-2xl mb-4`}>About Us</h1>
				<p className={`hidden lg:block`}>Our company is a leading provider of clothing and accessories. We offer a wide range of products that are designed to meet the needs of our customers. Our goal is to provide high-quality products at affordable prices. We are committed to providing our customers with the best possible shopping experience. We are constantly updating our product line to ensure that we are offering the latest trends and styles. Our team is dedicated to providing excellent customer service and we are always available to answer any questions you may have. We are confident that you will be satisfied with our products and we look forward to serving you.</p>
			</div>
		<main className={`container mx-auto px-4 lg:px-10 py-10 lg:py-20 pt-6 gap-5 grid grid-flow-row lg:grid-cols-2`}>
			<div className={`border shadow px-3 py-2 max-h-fit gap-1 grid`}>
				<h2 className={`text-sm font-bold lg:text-xl`}>Our Mission</h2>
				<p className={`text-xs font-medium lg:text-base`}>Our mission is to provide our customers with the best possible shopping experience. We are committed to offering high-quality products at affordable prices. We are dedicated to providing excellent customer service and we are always available to answer any questions you may have. We are confident that you will be satisfied with our products and we look forward to serving you.</p>
			</div>
			<div className={`border shadow px-3 py-2 max-h-fit gap-1 grid`}>
<h2 className={`text-sm font-bold lg:text-xl`}>Our Vision</h2>
				<p className={`text-xs font-medium lg:text-base`}>Our vision is to become the leading provider of clothing and accessories. We are committed to offering high-quality products at affordable prices. We are dedicated to providing excellent customer service and we are always available to answer any questions you may have. We are confident that you will be satisfied with our products and we look forward to serving you.</p>
			</div>
			<div className={`border shadow px-3 py-2 max-h-fit gap-1 grid`}>
				<h2 className={`text-sm font-bold lg:text-xl`}>Our Values</h2>
				<p className={`text-xs font-medium lg:text-base`}>We are committed to providing our customers with the best possible shopping experience. We are dedicated to offering high-quality products at affordable prices. We are committed to providing excellent customer service and we are always available to answer any questions you may have. We are confident that you will be satisfied with our products and we look forward to serving you.</p>
			</div>
			<div className={`border shadow px-3 py-2 max-h-fit gap-1 grid`}>
				<h2 className={`text-sm font-bold lg:text-xl`}>Our Team</h2>
				<p className={`text-xs font-medium lg:text-base`}>Our team is dedicated to providing excellent customer service. We are always available to answer any questions you may have. We are confident that you will be satisfied with our products and we look forward to serving you.</p>
			</div>
			<div className={`border shadow px-3 py-2 max-h-fit gap-1 grid`}>
				<h2 className={`text-sm font-bold lg:text-xl`}>Contact Us</h2>
				<p className={`text-xs font-medium lg:text-base`}>If you have any questions or concerns, please feel free to contact us. We are always available to answer any questions you may have. We are confident that you will be satisfied with our products and we look forward to serving you.</p>
			</div>
			<div className={`border shadow px-3 py-2 max-h-fit gap-1 grid`}>
				<h2 className={`text-sm font-bold lg:text-xl`}>FAQs</h2>
				<p className={`text-xs font-medium lg:text-base`}>If you have any questions, please feel free to check out our FAQs. We are always available to answer any questions you may have. We are confident that you will be satisfied with our products and we look forward to serving you.</p>
			</div>
		</main>
			<Footer/>
		</>
	)
}
