import React from "react";
import Link from "next/link";
import {useDispatch, useSelector} from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart, setTotal,
} from "@/redux/action";
export default function CartItem({ item}) {
  const products = useSelector(state => state.products);

  const dispatch = useDispatch();
  
  const handleDecrementQuantity = (item,product) => {
    dispatch(decrementQuantity(item))
    dispatch(setTotal(product))
  }
  const handleIncrementQuantity = (item,product) => {
    dispatch(incrementQuantity(item))
    dispatch(setTotal(product))
  };
  
  function handleRemoveProduct(item,products) {
    dispatch(removeFromCart(item))
    dispatch(setTotal(products))
  }
  
  return (
    <>
      <div className={`flex items-center lg:items-start p-2 lg:p-4 rounded gap-6 w-full`}>
        <div
          className={` max-w-[100px] lg:max-w-[160px] border-amber-300 lg:border 2xl:max-w-[160px] shadow-md border lg:border-transparent hover:border-amber-300 rounded-md *:hover:scale-105 duration-200 *:transition-all overflow-hidden`}
        >
          <img
            src={`https://${item.imageUrl}`}
            alt=""
            className={`w-full  object-cover`}
          />
        </div>
        <div className={`relative h-full w-full `}>
          <span
            className={`bg-primary text-[7px] uppercase tracking-widest font-black px-1 p-0.5 lg:text-[11px]`}
          >
            {item.brandName}
          </span>
          <Link href={`/prd/men/shirts/${item.id}`}>
            <h1 className={`text-[10px] font-medium 2xl:text-xl my-1 lg:my-2 lg:font-semibold lg:text-sm`}>{item.name}</h1>
          </Link>
          <p className={`font-bold text-[11px] lg:text-lg`}>Price: ${parseFloat(item.price)}</p>
          
          <div className={`flex items-center justify-between absolute w-full bottom-2 h-6 lg:h-9`}>
            <div className={`w-fit bg-amber-50 h-full rounded flex items-center justify-between text-xs `}>
            <button className={`px-2 lg:px-4 font-bold text-amber-600 text-2xl`} onClick={()=>handleDecrementQuantity(item,products)}>-</button>
            <span className={`text-black font-bold px-2 lg:text-lg w-8 text-center`}>{item.quantity}</span>
            <button className={`px-2 lg:px-4 font-bold text-amber-600 text-2xl`} onClick={()=>handleIncrementQuantity(item,products)}>+</button>
            </div>
            <div className={`bg-amber-300 text-[10px] px-3 h-full shadow rounded flex items-center justify-center text-amber-900 font-bold lg:text-base lg:px-5`} onClick={()=>handleRemoveProduct(item,products)}>
              <Link href={``}>Remove</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}