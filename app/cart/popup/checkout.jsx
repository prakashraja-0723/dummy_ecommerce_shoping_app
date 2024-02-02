import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {clearCart, removeFromCart, setTotal} from "@/redux/action";

export default function Checkout({isToggleModel,setIsToggleModel}) {
	// useSelector
  const products = useSelector((state) => state.products);
	const cartTotal = useSelector(state => state.cartTotal);
	
	// useDispatch
	const dispatch = useDispatch();
	
	// dispatch function
	const handleRemoveBeforeBuy = (item, products) => {
		dispatch(removeFromCart(item))
		dispatch(setTotal(products))
	};
	const handleCheckout = (products) => {
		dispatch(clearCart())
		dispatch(setTotal(products))
	};
	
	const handleToggleModel = () => {
		setIsToggleModel(!isToggleModel)
	}
	
	return (
    <>
      <div className={`bg-white w-10/12 h-screen-12 rounded-md relative lg:w-[550px]`}>
        <header
          className={`h-14 text-sm border-b flex items-center justify-between px-5`}
        >
          <span>Total Items: {products.length}</span>
	        <h1 className={`font-bold`}>Total Price: ${cartTotal}</h1>
        </header>
        <main className={`grid grid-flow-row px-3 my-5 `}>
          {products.map((item) => {
            return (
              <>
                <div key={item.id} className={`flex items-center gap-2 border shadow p-2 h-fit`}>
                  <div
                    className={` max-w-[68px] lg:max-w-[80px] border-amber-300 lg:border 2xl:max-w-[160px] shadow-md border lg:border-transparent hover:border-amber-300 rounded-md *:hover:scale-105 duration-200 *:transition-all overflow-hidden flex items-center justify-center h-full`}
                  >
                    <img
                      src={`https://${item.imageUrl}`}
                      alt=""
                      className={`w-full h-full object-cover`}
                    />
                  </div>
	                <div className={`text-xs my-2 font-medium`}>
		                <h1>{item.name}</h1>
		                <p className={`font-bold pt-1`}>Price: ${item.price}</p>
		                <div className={`bg-red-500 text-white w-fit h-6 mt-2 rounded`} onClick={()=>{handleRemoveBeforeBuy(item,products)}}>
			                <button className={`px-3  h-full`}>Remove</button>
		                </div>
	                </div>
                </div>
              </>
            );
          })}
        </main>
	      <footer className={`h-14 text-sm border-t w-full flex items-center justify-between px-5 bottom-0 absolute z-50`}>
		      <div className={`text-xs bg-red-600 text-white h-7 flex items-center rounded-full`}>
		      <button className={`px-5`} onClick={()=>handleToggleModel(isToggleModel)}>Cancel</button>
		      </div>
		      <div className={`text-xs bg-green-700 text-white h-7 flex items-center rounded-full`}>
		      <button className={`px-5`} onClick={()=>handleCheckout(products)}>Buy Now</button>
		      </div>
	      </footer>
      </div>
    </>
  );
}

