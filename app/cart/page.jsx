"use client";
import React, { useState } from "react";
import Navbar from "@/app/components/navbar/Navbar";
import Cart from "@/app/cart/Cart";
import Footer from "@/app/components/footer/footer";

export default function Page() {
  const [isToggleModel, setIsToggleModel] = useState(false);
  console.log(isToggleModel);
  
  return (
    <main className={`w-screen flex flex-col relative min-h-screen ${isToggleModel && " h-screen overflow-hidden"}`}>
      <div
        className={`bg-cart bg-cover min-h-[30vh] lg:h-[45vh]  bg-center bg-no-repeat relative`}
      >
        <div
          className={`absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 lg:text-4xl font-bold uppercase text-white text-center text-xl w-full`}
        >
          <h1>Your Shopping Cart</h1>
        </div>
        <Navbar/>
      </div>
      <div
        className={`my-4 lg:my-8 min-h-[66.5vh] lg:min-h-[50vh] ${isToggleModel && "lg:h-[80vh] overflow-hidden"} flex items-start flex-col container mx-auto relative `}
      >
        <Cart isToggleModel={isToggleModel} setIsToggleModel={setIsToggleModel}/>
      </div>
      <Footer />
    </main>
  );
}
