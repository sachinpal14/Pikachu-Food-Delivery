import React, { useReducer } from 'react'
import { GiChickenOven } from "react-icons/gi";
import { LuLeafyGreen } from "react-icons/lu";
import { addItem } from '../redux/CartSlice';
import { food_items } from '../Food';
import { useDispatch } from 'react-redux';
import { callingToast } from '../redux/Toast';
const Card = ({Name,image, id,type,price}) => {
   
 


    const dispatch=useDispatch()
    return (
        <div className='w-72 h-96   bg-white p-3 rounded-md flex flex-col gap-3 shadow-lg hover:border-3 hover:border-green-500   hover:scale-95 transition-all duration-400 '>
            <div className='w-full h-[60% ] overflow-hidden  rounded-lg'>
                <img  src={image} alt="" className='object-cover object-bottom size-80 rounded-lg ' />
            </div>  
            <div className='text-xl font-semibold text-black'>{Name}</div>
            <div className='flex items-center justify-between text-green-500 font-bold text-lg '>
            <div>Rs-{price}</div>
            <div className='flex justify-center items-center gap-2'>
                {type==="veg" ? <LuLeafyGreen />:<GiChickenOven/>}
                <span>{type}</span></div>
            </div>
            <button
            onClick={()=>
                {dispatch(addItem({id:id ,name:Name,price:price,image:image,qty:dispatch.length}))
              dispatch(callingToast("Item Added ✅"))
            }}
             className='w-full px-4 py-2 mt-5 bg-green-500 text-white rounded-lg hover:bg-green-300 transition-all duration-250  active:scale-90'>Add to Cart</button>
        </div>
    )
}

export default Card