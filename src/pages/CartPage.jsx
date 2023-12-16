import React from "react";
import { useSelector } from "react-redux";

import CartItem from "../Components/CartItem";
import { NavLink } from "react-router-dom";

export default function CartPage() {
  const { cartDataSet } = useSelector((state) => state.myfirstSlice);
  let totalAmount = 0;
  cartDataSet.forEach((element) => {
    totalAmount += Number(element.price);
  });
  return (
    <div>
      {cartDataSet.length > 0 ? (
        <div className="flex-col sm:flex lg:flex-row md:flex-row  sm:justify-between  ">
          <div className="w-full md:w-[55%]">
            {cartDataSet.map((cartItem) => (
              <CartItem key={cartItem.id} product={cartItem} />
            ))}
          </div>
          <div className="w-full md:w-[40%] flex flex-col gap-3 h-full sm:h-[80vh] px-9 py-10   justify-center">
            <p className="text-xl font-bold uppercase text-green-600 ">
              Your Cart
            </p>
            <p className="text-5xl font-bold uppercase text-green-700">
              Summary
            </p>
            <p className="text-xl font-semibold text-slate-700">
              Total items <span>{cartDataSet.length}</span>
            </p>
            <p className="text-2xl font-bold text-slate-700">
              Total Amount: <span>{`$ ${totalAmount}`}</span>
            </p>
            <p>
              <button className=" w-full px-5 py-4 rounded-xl bg-green-300 text-2xl uppercase font-bold hover:bg-green-400">
                CheckOut Now
              </button>
            </p>
          </div>
        </div>
      ) : (
        <div className="w-full h-[80vh]  flex flex-col gap-5 justify-center items-center">
          <p className="text-xl font-semibold ">Your Cart Is Empty ! </p>
          <NavLink
            className="px-5 py-4 rounded-xl bg-green-300 text-2xl uppercase font-bold hover:bg-green-400"
            to={"/"}
          >
            Shop Now{" "}
          </NavLink>
        </div>
      )}
    </div>
  );
}
