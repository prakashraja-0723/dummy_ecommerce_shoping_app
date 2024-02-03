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
	    <div
		    className={`bg-white w-10/12 h-[540px] rounded-md relative lg:min-w-[500px] lg:max-w-[700px] lg:min-h-[600px] xl:w-[700px]  overflow-hidden `}>
		    <header
			    className={`h-14 lg:h-20 text-sm border-b flex items-center justify-between px-5 xl:p-8`}
		    >
			    <span className={`lg:text-lg font-semibold`}>Total Items: {products.length}</span>
			    <h1 className={`font-bold lg:text-2xl`}>Total Price: ${cartTotal}</h1>
		    </header>
		    <main
			    className={`flex items-center justify-start flex-col gap-4 px-3 my-5 lg:my-7 lg:px-6 overflow-scroll h-[24rem] lg:h-[24.5rem] 2xl:min-h-fit 2xl:max-h-full w-full mb:14 lg:mb-20 overflow-y-auto checkout`}>
			    {products.map((item) => {
				    return (
					    <>
						    <div key={item.id}
						         className={`flex items-center gap-2 border rounded-md shadow p-2 h-fit lg:p-3 lg:gap-8 w-full `}>
							    <div
								    className={`max-w-[68px] lg:min-w-[68px] lg:max-w-[110px] border-amber-300 lg:border 2xl:max-w-[120px] shadow-md border lg:border-transparent hover:border-amber-300 rounded-md *:hover:scale-105 duration-200 *:transition-all overflow-hidden flex items-center justify-center lg:h-full`}
							    >
								    <img
									    src={`https://${item.imageUrl}`}
									    alt=""
									    className={`w-full object-cover`}
								    />
							    </div>
							    <div className={`text-xs my-2 font-medium`}>
								    <h1 className={`lg:text-xl font-bold`}>{item.name}</h1>
								    <p className={`font-bold lg:text-base pt-1`}>Price: ${item.price}</p>
								    <div className={`bg-red-500 text-white w-fit h-6 lg:h-8 mt-2 rounded`} onClick={() => {
									    handleRemoveBeforeBuy(item, products)
								    }}>
									    <button className={`px-3 h-full lg:text-base lg:px-4 font-semibold`}>Remove</button>
								    </div>
							    </div>
						    </div>
					    </>
				    );
			    })}
		    </main>
		    <footer
			    className={`bg-white h-14 lg:h-20 text-sm border-t w-full flex items-center justify-between px-5 bottom-0 absolute z-50`}>
			    <div className={`text-xs bg-red-600 text-white h-7 lg:h-10 flex items-center rounded-full`}>
				    <button className={`px-5 lg:text-sm lg:font-bold`} onClick={() => handleToggleModel(isToggleModel)}>Cancel
				    </button>
			    </div>
			    <div className={`text-xs bg-green-700 text-white h-7 lg:h-10 flex items-center rounded-full`}>
				    <button className={`px-5 lg:text-sm lg:font-bold`} onClick={() => handleCheckout(products)}>Buy Now</button>
			    </div>
		    </footer>
	    </div>
    </>
  );
}

