"use client";
import { useDispatch, useSelector } from "react-redux";
import React, {useState} from "react";
import CartItem from "@/app/cart/CartItem";
import {clearCart} from "@/redux/action";
import Checkout from "@/app/cart/popup/checkout";

export default function Cart({isToggleModel,setIsToggleModel}) {
  const addProduct = useSelector((state) => state.products);
  const cTotal = useSelector((state)=> state.cartTotal);

  
  const dispatch = useDispatch();

  const handleDeleteAllCartItem = () => {
    dispatch(clearCart());
  };
  const handleToggleModel = (isToggleModel) => {
    setIsToggleModel(!isToggleModel);
  }
  return (
    <>
      {addProduct.length === 0 && (
        <p
          className={`text-xl font-bold lg:text-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
        >
          Your Cart is Empty.
        </p>
      )}
      {addProduct.length !== 0 && (
        <>
          <div className={`flex items-center justify-between w-full pr-4 `}>
            
            <h1
              className={`text-base lg:text-xl font-bold text-center w-fit border-l-4 border-amber-300 bg-amber-50 px-3 lg:px-6 h-8 lg:h-11 flex items-center justify-center ml-4`}
            >
              Total Item : {addProduct.length}
            </h1>
            <div
              className={`h-7 lg:h-10  bg-red-500 active:bg-red-600 rounded-[5px] right-6 flex items-center justify-center font-semibold text-white shadow`}
              onClick={handleDeleteAllCartItem}
            >
              <button className={`w-fit px-3 text-sm lg:text-base lg:px-5`}>Clear All</button>
            </div>
          </div>
          <div
            className={`grid grid-flow-row lg:grid-cols-2 place-items-start w-full lg:px-10 rounded-xl *:border *:shadow *:h-40 *:lg:h-60  gap-5 p-5 relative mb-14`}
          >
            {addProduct.map((item, index) => {
              return <CartItem item={item} key={item.id} index={index}/>;
            })}
            
          </div>
          <div className={`absolute flex items-center justify-between w-full px-6 -bottom-4 lg:-bottom-4 bg-white py-4 shadow-[0px_0_5px_rgba(0,0,0,0.4)] `}>
            <h1 className={`text-base lg:text-xl font-semibold`}>Total Price: ${cTotal}</h1>
            <button
              className={`rounded-full bg-amber-400 hover:bg-amber-300 h-8 lg:h-10 w-fit px-6 font-semibold tracking-wide flex items-center justify-center text-sm lg:text-base`}
              onClick={()=>handleToggleModel(isToggleModel)}
            >Checkout</button>
          </div>
          <main
            className={`bg-[rgba(0,0,0,0.75)] fixed top-0 left-0 w-screen h-screen  transition-all ${
              isToggleModel ? `block scale-100` : `hidden scale-0`
            } h-screen w-screen z-50 flex items-center justify-center`}
          >
            <Checkout isToggleModel={isToggleModel} setIsToggleModel={setIsToggleModel} />
          </main>
        </>
      )}
    </>
  );
}
