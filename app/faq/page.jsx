import React from "react";
import Footer from "@/app/components/footer/footer";
import Navbar from "@/app/components/navbar/Navbar";

const Faq = () => {
  return (
    <>
      <div
        className={`bg-collection bg-cover min-h-[30vh] lg:h-[50vh] bg-center bg-no-repeat relative`}
      >
        <div
          className={`absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 lg:text-4xl font-bold uppercase text-white text-center text-xl w-full`}
        >
          <h1>
            Frequently Asked Questions
          </h1>
        </div>
        <Navbar />
      </div>
        <h1 className={`text-center font-bold underline mt-6 text-lg md:text-xl lg:mt-10 lg:text-2xl`}>
          Frequently Asked Questions
        </h1>
      <main
        className={`container mx-auto px-4 lg:px-10 py-10 lg:py-20 pt-6 gap-5 grid grid-flow-row lg:grid-cols-2`}
      >
        <div className={`border shadow px-3 py-2 max-h-fit gap-1 grid`}>
          <h2 className={`text-sm font-bold lg:text-xl`}>What is BooTiq?</h2>
          <p className={`text-xs font-medium lg:text-base`}>
            BooTiq is a fashion e-commerce platform that offers a wide range of
            clothing, accessories and footwear{" "}
          </p>
        </div>
        <div className={`border shadow px-3 py-2 max-h-fit gap-1 grid`}>
          <h2 className={`text-sm font-bold lg:text-xl`}>How can I place an order?</h2>
          <p className={`text-xs font-medium lg:text-base`}>
            Placing an order is easy. Simply click on the product you like,
            select the size and color, and click on the "Add to Cart" button.
            Once you're done shopping, click on the cart icon and follow the
            instructions to complete your order.
          </p>
        </div>
        <div className={`border shadow px-3 py-2 max-h-fit gap-1 grid`}>
          <h2 className={`text-sm font-bold lg:text-xl`}>How can I track my order?</h2>
          <p className={`text-xs font-medium lg:text-base`}>
            Once your order has been shipped, you will receive an email with a
            tracking number. You can use this number to track your order on the
            courier's website.
          </p>
        </div>
        <div className={`border shadow px-3 py-2 max-h-fit gap-1 grid`}>
          <h2 className={`text-sm font-bold lg:text-xl`}>
            What payment methods do you accept?
          </h2>
          <p className={`text-xs font-medium lg:text-base`}>
            We accept all major credit and debit cards, as well as PayPal.
          </p>
        </div>
        <div className={`border shadow px-3 py-2 max-h-fit gap-1 grid`}>
          <h2 className={`text-sm font-bold lg:text-xl`}>How can I return an item?</h2>
          <p className={`text-xs font-medium lg:text-base`}>
            If you are not satisfied with your purchase, you can return it
            within 30 days of the delivery date. Simply contact our customer
            service team and they will guide you through the return process.
          </p>
        </div>
        <div className={`border shadow px-3 py-2 max-h-fit gap-1 grid`}>
          <h2 className={`text-sm font-bold lg:text-xl`}>
            How can I contact customer service?
          </h2>
          <p className={`text-xs font-medium lg:text-base`}>
            You can contact our customer service team by email at
            <a href="mailto:bootiq@supports.com">Conduct via email</a>{" "}
          </p>
        </div>
      </main>
      <Footer/>
    </>
  );
};
export default Faq;
