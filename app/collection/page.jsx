"use client";
import React, { useState } from "react";
import Image from "next/image";
import Shirts_Data from "@/app/data/men/data_for_shirts.json";
import Navbar from "@/app/components/navbar/Navbar";
import filter_icon from "@/app/assets/svg/filter.svg";
import Footer from "@/app/components/footer/footer";
import Link from "next/link";
import {useDispatch, useSelector} from "react-redux";

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenFilter = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <main className={`w-screen min-h-screen bg-gray-100`}>
        
        <div
          className={`bg-collection bg-cover min-h-[30vh] lg:h-[50vh] bg-center bg-no-repeat relative`}
        >
          <div
            className={`absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 lg:text-4xl font-bold uppercase text-white text-center text-xl w-full`}
          >
            <h1>Explorer Collection</h1>
            <p
              className={`text-base w-6/12 font-normal capitalize mx-auto mt-4 hidden lg:block lg:text-sm`}
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
        <div
          className={`flex items-center justify-between container mx-auto lg:px-10 lg:my-12 relative`}
        >
          <div className={`mt-2 mx-2 hidden`}>
            <button
              className={`flex items-center justify-center gap-3 h-11 text-lg w-fit px-7 bg-white border shadow rounded-md`}
              onClick={handleOpenFilter}
            >
              Filter <Image src={filter_icon} alt={filter_icon} />
            </button>
            <div
              className={`absolute flex flex-col items-start bg-white top-14 w-44 lg:gap-0 *:h-10 *:text-left rounded-[6px] ${
                !isOpen ? "h-0" : "h-40"
              } overflow-hidden *:px-6 *:bg-white *:border-b *:w-full transition-all z-50`}
            >
              <button className={`hover:bg-slate-200 transition-all`}>
                Men
              </button>
              <button className={`hover:bg-slate-200 transition-all`}>
                Women
              </button>
              <button className={`hover:bg-slate-200 transition-all`}>
                Boys
              </button>
              <button className={`hover:bg-slate-200 transition-all border-0`}>
                Girls
              </button>
            </div>
          </div>
        </div>
        <section
          className={`min-h-fit mb-16 *:lg:w-72 *:lg:h-96 *:w-56 *:h-72 gap-8 *:rounded-md grid grid-flow-row mt-6 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 container mx-auto place-items-center px-5 lg:px-0`}
        >
          {Shirts_Data.products.map((item, index) => (
            <div key={item.id} className={`hover:*:-top-4 relative `}>
              <div
                className={`flex  flex-col top-0  rounded-xl overflow-hidden transition-all duration-300 relative shadow-xl h-full w-full`}
              >
                {/*<span className={`bg-amber-400 absolute -rotate-45 w-28 lg:w-32 h-6 lg:h-10 -left-8 top-3 flex items-center justify-center pb-[3px] font-semibold text-xs lg:text-base uppercase`}>15%-off</span>*/}
                <Link
                  href={`/prd/men/shirts/${item.id}clr=${item.colour}&WayId=${item.colourWayId}`}
                  className={`absolute w-full h-full bg-transparent *:-bottom-10 *:absolute *:hover:bottom-8 cursor-pointer`}
                ></Link>
                <div
                  className={` hidden lg:block absolute w-full h-full bg-transparent *:-bottom-10 *:absolute *:hover:bottom-8 cursor-pointer`}
                >
                  <Link
                    href={`/prd/men/shirts/${item.id}clr=${item.colour}&WayId=${item.colourWayId}`}
                    className={`bg-primary shadow w-fit px-2 lg:px-3 h-6 lg:h-10 rounded-full text-xs lg:text-sm uppercase font-semibold flex items-center justify-center left-1/2 -translate-x-1/2 transition-all duration-500`}
                  >
                    view Product
                  </Link>
                </div>
                <div className={`w-full h-full transition-all duration-200`}>
                  <img
                    src={`https://${item.imageUrl}`}
                    alt={``}
                    className={`w-full h-full object-fill`}
                  />
                </div>
              </div>
            </div>
          ))}
        </section>
        <Footer />
      </main>
    </>
  );
}
