import React from 'react'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../redux/slices/mySlice';
import { MdDelete } from "react-icons/md";


export default function CartItem({product}) {
    const dispatch=useDispatch();

  return (
    <div className='mx-auto w-[90%] flex flex-col md:flex-row  gap-8 px-10 items-center border-b-2 border-black py-4'>
        <div className='w-[25%]'>
            <img className=" object-cover " src={product.image} alt="" />
        </div>
        <div className='w-[100%] sm:w-[75%]'>
            <p className='font-bold  text-xl'>{product.title}</p>
            <p>{product.description}</p>
            <div className="w-full  mt-2 flex justify-between items-center">
                <p className="text-xl font-bold text-green-700 ">{`$ ${product.price}`}</p>
                <p className='p-3 bg-red-300 rounded-[50%] z-0' onClick={()=>{
                    dispatch(removeFromCart(product.id))
                }}><  MdDelete />
                </p>
            </div>
        </div>
    </div>
  )
}
