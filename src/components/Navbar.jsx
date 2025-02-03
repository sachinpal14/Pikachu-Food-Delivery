import React, { useContext, useEffect } from 'react'
import { MdFastfood } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { LuShoppingBag } from "react-icons/lu";
import { dataContext } from '../context/Usercontext';
import { food_items } from '../Food';
import { useSelector } from 'react-redux';
const Navbar = () => {

  const items = useSelector(state => state.cart)
 



  let { input, setInput, setcate, setshowCart } = useContext(dataContext)

  useEffect(() => {

    let newlist = food_items.filter((item) => (item.food_name.includes(input) || item.food_name.toLowerCase().includes(input)))
    setcate(newlist)
  }, [input])



  return (
    <div className='w-full h-[100px] '>
      <nav className='flex justify-between items-center p-4'>
        <div className=" size-10 bg-white flex items-center justify-center rounded-md shadow-xl">
          <MdFastfood className='size-6 text-green-500 ' />
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault()
          }}
          className='w-[50%] h-10 bg-white flex items-center px-2 gap-2 rounded-xl shadow-md md:w-[70%] md:h-[50px] md:text-2xl '>
          <IoMdSearch className='size-5 text-green-500' />
          <input
            onChange={(e) => {
              setInput(e.target.value)
            }}
            value={input}
            className='w-full outline-none text-sm '
            type="text"
            placeholder='Search Items.......' />
        </form>

        <div
          onClick={() => { setshowCart(true) }}
          className=" bg-white size-10 flex items-center justify-center rounded shadow-xl relative cursor-pointer">
          <span className='absolute top-0 right-1 text-green-500'>{items.length}</span>
          <LuShoppingBag className='size-4 text-green-500' />
        </div>
      </nav>
    </div>
  )
}

export default Navbar