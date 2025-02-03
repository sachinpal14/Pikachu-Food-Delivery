import React, { useState } from 'react'
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { DecreamentQty, IncreamentQty, removeItem } from '../redux/CartSlice';
import { callingToast } from '../redux/Toast';
const MiniCard = ({id,name,price,qty,image}) => { 

    let dispatch=useDispatch()
 



    return (
        <div  className='main w-full h-28 p-2 shadow-xl rounded-lg flex items-center gap-2 '>
            <div className='  w-[60%] h-full flex justify-between items-center gap-x-2 p-1'>
                <div className='w-[60%] h-full  overflow-hidden rounded-lg '>
                    <img className='object-cover object-bottom w-full h-full sm:object-center' src={image} alt="" />
                </div>
                <div className='flex  flex-col gap-2 rounded-md px-2w-[40%]'>
                    <div className='  w-[40%] h-full gap-5 text-gray-900 font-semibold  md:text-xl capitalize '>{name}</div>
                    <div className='w-[90%] h-8 flex border-green-400 border-3 rounded-full md:h-10 md:w-[8vw] '>
                    <button 
                    onClick={()=>{
                        qty>1?dispatch(DecreamentQty(id)):qty
                        dispatch(callingToast("Item Removed..."))
                        
                    }}
                    className='w-[30%] h-full bg-white text-xl cursor-pointer hover:bg-gray-100 rounded-l-full'>-</button>
                    <span className='w-[40%] h-full bg-slate-200 flex justify-center items-center '>{qty}</span>
                    <button
                    onClick={()=>{
                        dispatch(IncreamentQty(id))
                        dispatch(callingToast("Item Added ✅"))
                    }}                    
                    className='w-[30%] h-full bg-white text-xl cursor-pointer hover:bg-gray-100 rounded-r-full'>+</button>
                    </div>
                </div>
            </div>
            <div className='right w-[40%] h-full flex flex-col items-end justify-between pt-2 pb-4 px-4'>
                <div className='text-green-500 font-semibold text-md md:text-lg '>Rs/Qty: {price}/-</div>
                <div 
                className='text-2xl text-red-500 cursor-pointer'><MdDeleteOutline  onClick={()=>{dispatch(removeItem(id))
                    dispatch(callingToast("Item Removed..."))
                }} /></div>
            </div>
        </div>
    )
}

export default MiniCard