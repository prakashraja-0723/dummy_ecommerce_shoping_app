"use client";
import React, { useState } from "react";
import Image from "next/image";

import menu_icon from "@/app/assets/svg/menu.svg";
import close_icon from "@/app/assets/svg/x-icon.svg";
import search_icon from "@/app/assets/svg/search.svg";
import BOOTIQ_black_logo from "@/app/assets/svg/BOOTIQ_black.svg";
import BOOTIQ_white_logo from "@/app/assets/svg/BOOTIQ_white.svg";
import Link from "next/link";

import { useDispatch, useSelector } from "react-redux";
import { openMenu } from "@/redux/action";

export default function Navbar() {
  const isOpen = useSelector((state) => state.isOpenMenu);
  const [openSearch, setOpenSearch] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(isOpen);

  const dispatch = useDispatch();

  const handleOpenSearch = () => {
    setOpenSearch(!openSearch);
  };

  const handleOpenMenu = (isOpenMenu) => {
    console.log(isOpenMenu);
    setIsOpenMenu(!isOpenMenu);
    console.log(isOpenMenu);
    dispatch(openMenu(!isOpenMenu));
    console.log(dispatch(openMenu(isOpenMenu)));
  };

  return (
    <nav className={`lg:container lg:mx-auto relative`}>
      <div
        className={`flex items-center justify-between h-12 xl:h-24 w-screen px-4 fixed z-10 top-0 bg-white  shadow-zinc-600 shadow lg:bg-transparent  lg:h-20 lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:shadow-none lg:container lg:mx-auto `}
      >
        <Image
          src={menu_icon}
          alt={"menu"}
          className={"lg:hidden cursor-pointer"}
          onClick={() => {
            handleOpenMenu(isOpenMenu);
          }}
        />
        <Link href={"/home"} className={`lg:hidden cursor-pointer`}>
          <Image src={BOOTIQ_black_logo} alt={"BOOTIQ logo"} />
        </Link>
        <Image
          src={BOOTIQ_white_logo}
          alt={"BOOTIQ logo"}
          className={`hidden lg:block`}
        />
        <Image
          src={search_icon}
          alt={"search"}
          className={`lg:hidden cursor-pointer`}
          onClick={handleOpenSearch}
        />
      </div>
      <div
        className={`bg-white fixed z-50 h-screen w-screen top-0 ${
          isOpenMenu ? "right-0" : "right-full"
        } lg:h-fit lg:absolute transition-all lg:bg-transparent xl:h-24 lg:w-7/12 xl:w-6/12 lg:flex lg:items-center lg:justify-end lg:z-10 lg:right-4 lg:top-7 2xl:top-0 xl:top-0 `}
      >
        <Image
          src={close_icon}
          alt={`close menu`}
          className={`w-6 absolute top-4 left-4 lg:hidden cursor-pointer`}
          onClick={() => {
            handleOpenMenu(isOpenMenu);
          }}
        />
        <ul
          className={`flex items-center lg:flex-row lg:justify-center justify-start pt-20 lg:pt-0 flex-col gap-4 h-full lg:gap-10 lg:text-sm xl:text-base 2xl:text-lg xl:font-normal lg:text-white uppercase`}
        >
          <li>
            <Link
              href={`/home`}
              onClick={() => {
                handleOpenMenu(isOpenMenu);
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href={`/collection`}
              onClick={() => {
                handleOpenMenu(isOpenMenu);
              }}
            >
              Collection
            </Link>
          </li>
          <li>
            <Link
              href={`/cart`}
              onClick={() => {
                handleOpenMenu(isOpenMenu);
              }}
            >
              Cart
            </Link>
          </li>
          <li>
            <Link
              href={`/faq`}
              onClick={() => {
                handleOpenMenu(isOpenMenu);
              }}
            >
              FAQ
            </Link>
          </li>
          <li>
            <Link
              href={`/about_us`}
              onClick={() => {
                handleOpenMenu(isOpenMenu);
              }}
            >
              About Us
            </Link>
          </li>
          <li className={`hidden lg:block`}>
            <Link
              href={`/sign_in`}
              onClick={() => {
                handleOpenMenu(isOpenMenu);
              }}
            >
              Account/Log In
            </Link>
          </li>
        </ul>
      </div>
      <div
        className={`w-5/6 min-w-[20vw] lg:w-3/12 lg:h-9 2xl:h-10 h-10 bg-white rounded-full overflow-hidden flex items-center justify-center  fixed z-[1] left-1/2 -translate-x-1/2 transition-all duration-500 px-5  ${
          openSearch ? "top-16" : "-top-16"
        }  lg:top-6 xl:top-8 lg:h-12 lg:absolute lg:min-w-36 lg:left-0 lg:translate-x-1/2 lg:z-50 shadow`}
      >
        <input
          type="text"
          placeholder={`Find your Fashion`}
          className={` bg-transparent h-full flex-1 text-base font-semibold placeholder:font-normal outline-none`}
        />
        <button>
          <Image src={search_icon} alt={``} className={`w-4 h-4`} />
        </button>
      </div>
    </nav>
  );
}
