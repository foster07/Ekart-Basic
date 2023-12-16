import React from 'react'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../redux/slices/mySlice';
import { MdDelete } from "react-icons/md";


export default function CartItem({product}) {
    const dispatch=useDispatch();

  return (
    <div className=' flex items-center gap-8 px-10'>
        <div className='w-[25%]'>
            <img className=" object-cover " src={product.image} alt="" />
        </div>
        <div className='w-[75%]'>
            <p className='font-bold  text-xl'>{product.title}</p>
            <p>{product.description}</p>
            <div className="w-full  mt-2 flex justify-between items-center">
                <p className="text-xl font-bold text-green-700 ">{`$ ${product.price}`}</p>
                <p onClick={()=>{
                    dispatch(removeFromCart(product.id))
                }}><MdDelete />
                </p>
            </div>
        </div>
    </div>
  )
}
