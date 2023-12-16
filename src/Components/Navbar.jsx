import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
  const cartData = useSelector((state) => state.myfirstSlice.cartDataSet);

  return (
    <div className=" flex justify-around bg-slate-200 p-4 text-2xl font-bold items-center mb-5" >
      <NavLink to={"/"}>
        <p>Home</p>
      </NavLink>

      <NavLink to={"/cart"}>
        <p className="flex items-center gap-1">
           <FaShoppingCart />
          <sup>{cartData.length}</sup>
        </p>
      </NavLink>
    </div>
  );
}
