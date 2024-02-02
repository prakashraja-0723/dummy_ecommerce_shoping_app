"use client";
import React from "react";
import Shirt_Data from "@/app/data/men/data_for_shirts.json";
import BackArr from "@/app/assets/svg/backArr.svg";
import {useDispatch, useSelector} from "react-redux";
import Link from "next/link";
import {addToCart, setTotal} from "@/redux/action";
import Image from "next/image";

// const getProducts = async () => {
//   const res = await fetch("http://localhost:4000/products", {
//     next: {
//       revalidate: 0,
//     },
//   });
//   return await res.json();
// };

const Product = ({ id }) => {
  // change id type string to number
  const selectedId = parseInt(id);
  
  const products = useSelector(state => state.products)

  const dispatch = useDispatch();

  const handleAddProduct = (product,products) => {
    dispatch(addToCart(product));
    dispatch(setTotal(products))
    console.log(dispatch(addToCart(product)))
  console.log(parseFloat(product.price));
  };

  // const products =  getProducts();
  return (
    <div className={`my-4 lg:my-16 container mx-auto`}>
      <div
        className={`mx-2 border px-3 h-10 flex items-center justify-center relative w-fit shadow`}
      >
        <Link href={`/collection`} className={`flex gap-3`}>
          <Image src={BackArr} alt={`back`} className={`w-7`} />
          Back to Collection
        </Link>
      </div>
      {Shirt_Data.products.map((product) => {
        if (product.id === selectedId) {
          return (
            <div
              key={product.id}
              className={` my-4 flex flex-col md:flex-row  items-start gap-5 lg:gap-10 container mx-auto`}
            >
              <div className={`grid gap-5 px-5 md:px-9`}>
                <p
                  className={`uppercase text-xs font-bold tracking-widest bg-primary p-1 w-fit `}
                >
                  {product.brandName}
                </p>
                <div className={`flex flex-col gap-3 items-start `}>
                  <div
                    className={`max-w-96 mx-auto lg:w-96 h-96 lg:h-[500px] rounded-md shadow border relative `}
                  >
                    <img
                      src={`https://${product.imageUrl}`}
                      alt=""
                      className={`w-full h-full object-cover`}
                    />
                  </div>
                  <div
                    className={`flex items-center gap-5 *:max-w-20 *:lg:max-w-24 *:shadow justify-center w-full *:border *:rounded-md mb-4 mt-2 *:overflow-hidden `}
                  >
                    <div
                      className={`hover:border-amber-300 hover:shadow-amber-200 cursor-pointer active:border-amber-300`}
                    >
                      <img
                        src={`https://${product.imageUrl}`}
                        alt=""
                        className={`w-full h-full object-cover`}
                      />
                    </div>
                    <div
                      className={`hover:border-amber-300 hover:shadow-amber-200 cursor-pointer active:border-amber-300`}
                    >
                      <img
                        src={`https://${product.additionalImageUrls[0]}`}
                        alt=""
                        className={`w-full h-full object-cover`}
                      />
                    </div>
                    <div
                      className={`hover:border-amber-300 hover:shadow-amber-200 cursor-pointer active:border-amber-300`}
                    >
                      <img
                        src={`https://${product.additionalImageUrls[1]}`}
                        alt=""
                        className={`w-full h-full object-cover`}
                      />
                    </div>
                    <div
                      className={`hover:border-amber-300 hover:shadow-amber-200 cursor-pointer active:border-amber-300`}
                    >
                      <img
                        src={`https://${product.additionalImageUrls[2]}`}
                        alt=""
                        className={`w-full h-full object-cover`}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={`px-5 mt-12`}>
                <h1 className={`font-bold text-base mb-4 lg:text-4xl lg:w-10/12`}>{product.name}</h1>
                <p className={`font-bold text-xl mb-2 lg:text-2xl`}>Price: ${product.price}</p>
                <div
                  className={`h-10 lg:h-12 w-fit border flex items-center justify-center rounded-[6px] lg:rounded-[8px] lg:bg-white shadow hover:bg-primary active:bg-secondary bg-amber-400 transition-all duration-300`}
                >
                  <Link
                      href={"/cart"}
                      className={`text-sm lg:text-lg px-5 lg:px-7 font-semibold`}
                      onClick={() => {handleAddProduct(product)}}
                    >
                      Add to Cart
                    </Link>
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};
export default Product;
