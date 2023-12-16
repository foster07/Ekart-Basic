import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../redux/slices/mySlice";
// import { toast } from "react-toastify/dist/components";

export default function Card({ product }) {
  const cartDataSet = useSelector((state) => state.myfirstSlice.cartDataSet);
  // const [isAdded, setIsAdded] = useState(false);
  const isAdded = cartDataSet.some(item=> product.id === item.id);
  
  const dispatch = useDispatch();

  function addItems(item) {
    dispatch(addToCart(item));
    // toast.success('added')
    // setIsAdded((prev) => !prev);
    console.log(cartDataSet);
  }

  function removeItems(product) {
    dispatch(removeFromCart(product.id));
    // setIsAdded((prev) => !prev);
    console.log("removeItmes is running ");
  }

  return (
    <div className=" w-80 shadow-[0_0_5px_rgba(0,0,0,0.4)]  p-4 flex flex-col gap-2 items-center rounded-lg">
      <p className="text-xl text-slate-800 text-left  font-bold"> {`${product.title.substr(0,22)}...`}</p>
      <p className=" text-center text-sm text-slate-500 p-2">{`${product.description.substr(0,65)}...`}</p>
      <div >
        <img className="w-44 h-60 object-contain " src={product.image} alt="product_image" />
      </div>
      <div className="w-full px-4 mt-2 flex justify-around items-center">
        <div>
        <p className="text-xl font-bold text-green-700 ">{`$ ${product.price}`}</p>
          </div>
        <div>
          {!isAdded ? (
            <button
              onClick={() => {
                addItems( product );
              }}
              className="uppercase py-1 font-bold hover:bg-gray-600 hover:text-white transition-all rounded-lg  border-2 border-gray-700  px-5"
            >
              Add to Cart
            </button>
          ) : (
            <button
              onClick={() => {
                removeItems( product );
              }}
              className="uppercase py-1 font-bold hover:bg-gray-600 hover:text-white transition-all rounded-lg  border-2 border-gray-700  px-5"
            >
              Remove Item
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
