// "use client"
import React from "react";
import Product from "@/app/prd/men/shirts/[id]/Product";
import Navbar from "@/app/components/navbar/Navbar";
import Footer from "@/app/components/footer/footer";

export default function Page({ params }) {
  return (
    <main className={`w-screen min-h-screen flex flex-col relative`}>
      <div
        className={`bg-cart bg-cover min-h-[30vh] lg:h-[45vh] bg-center bg-no-repeat relative`}
      >
        <div
          className={`absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 lg:text-4xl font-bold uppercase text-white text-center`}
        >
          <h1>Your Shopping Cart</h1>
        </div>
        <Navbar />
      </div>
      <Product id={params.id} product={params.item} />
      <Footer />
    </main>
  );
}
