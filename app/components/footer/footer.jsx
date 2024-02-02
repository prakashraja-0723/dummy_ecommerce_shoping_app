import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className={`bg-footer w-screen  h-auto`}
    >
	    <div className={`container mx-auto grid grid-cols-1 gap-6 p-4 lg:grid-cols-2`}>
      <div className={`lg:col-span-2`}>
        <h1 className={`text-xl font-semibold text-white lg:text-4xl lg:font-bold`}>
          Welcome to <span className={`text-primary`}>BootiQ</span>
        </h1>
        <p className={`text-white text-xs`}>Where Style Meets Elegance!</p>
        <ul className={`mt-2 text-secondary flex gap-3 text-xs lg:text-base`}>
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/"}>Collection</Link>
          </li>
          <li>
            <Link href={"/"}>Cart</Link>
          </li>
          <li>
            <Link href={"/"}>FAQ</Link>
          </li>
          <li>
            <Link href={"/"}>About Us</Link>
          </li>
        </ul>
      </div>
      <div>
        <h1 className={`text-sm font-semibold text-secondary lg:text-xl`}>Newsletter</h1>
        <p className={`text-[10px] font-semibold text-white lg:text-base`}>
          Subscribe to our newsletter for exclusive offers, styling tips, and
          more:
        </p>
        <div className={`hidden lg:flex mt-5 h-10`}>
          <input type="email" className={`w-8/12 px-3 py-2 outline-none rounded-l border`}/>
          <button className={`w-fit h-full px-4 bg-primary rounded-r active:bg-amber-300`}>Subscribe</button>
        </div>
        <button
          className={`bg-primary mt-2 w-fit h-7 px-4 rounded-full text-xs font-semibold flex items-center justify-center lg:hidden`}
        >
          Subscribe
        </button>
      </div>

      <div>
        <h2 className={`text-sm font-semibold text-primary lg:text-xl`}>
          Contact Information
        </h2>
        <div className={`flex justify-between`}>
          <div className={`text-xs lg:text-base`}>
            <p className={`flex flex-col`}>
              <span className={`text-secondary text-xs font-semibold lg:text-base`}>
                Visit Us:
              </span>
              <span className={`text-white text-[10px] lg:text-base`}>BootiQ,</span>
              <span className={`text-white text-[10px] lg:text-base`}>
                123 Fashion Street,
              </span>
              <span className={`text-white text-[10px] lg:text-base`}>
                Cityville, State,
              </span>
              <span className={`text-white text-[10px] lg:text-base`}>
                Zip Code - 878 789
              </span>
            </p>
          </div>
          <div className={`flex flex-col gap-3`}>
            <div>
              <h2 className={`text-xs font-semibold text-secondary lg:text-base`}>
                Email Us:
              </h2>
              <p className={`text-white text-[10px] lg:text-base`}>info@bootiq.com</p>
            </div>
            <div>
              <h2 className={`text-xs font-semibold text-secondary lg:text-base`}>
                Call Us:
              </h2>
              <p className={`text-white text-[10px] lg:text-base`}>
                Customer Service: +1 (123) 456-7890
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className={`text-primary font-semibold text-sm lg:text-xl`}>
          Business Hours:
        </h1>
        <ul className={`text-[10px] text-white lg:text-base`}>
          <li>Monday to Friday: 9:00 AM - 6:00 PM</li>
          <li>Saturday: 10:00 AM - 4:00 PM</li>
          <li>Sunday: Closed</li>
        </ul>
      </div>
      <div>
        <h1 className={`text-sm text-primary font-semibold lg:text-xl`}>Social Media:</h1>
        <p className={`text-[10px] font-semibold text-white lg:text-base`}>
          Connect with us on social media for the latest updates and behind-the-
          scenes content:
        </p>
        <ul
          className={`flex items-center justify-center text-xs gap-3 mt-3 text-white lg:text-base`}
        >
          <li>Instagram</li>
          <li>|</li>
          <li>Facebook</li>
          <li>|</li>
          <li>Twitter</li>
          <li>|</li>
          <li>Pinterest</li>
        </ul>
      </div>
	    </div>
      <div className={`bg-primary w-screen mt-4 text-[10px] h-7 lg:h-10 flex items-center px-4 font-semibold lg:text-base`}>
        Copyright © 2024 BootiQ. All rights reserved.
      </div>
    </footer>
  );
}
