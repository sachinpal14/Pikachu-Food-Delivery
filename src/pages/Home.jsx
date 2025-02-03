import React, { useCallback, useContext } from 'react'
import Navbar from '../components/Navbar'
import Categories from '../Catogery'
import Card from '../components/Card'
import { food_items } from '../Food'
import { dataContext } from '../context/Usercontext'
import { RxCross1 } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux'
import MiniCard from '../components/MiniCard'
import { callingToast } from '../redux/Toast'

const Home = () => {

  let dispatch=useDispatch()

  let { cate, setcate, input, setshowCart, showCart } = useContext(dataContext)


  let items = useSelector(state => state.cart)



  let totalPrice = (items.reduce((total, item) => item.qty*(total + item.price), 0))
  let deliveryFee = 20
  let taxes = totalPrice * 0.5 / 100;

  let grandTotal = Math.floor(totalPrice + deliveryFee + taxes)



  const filter = function (category) {
    if (category === "All") {
      setcate(food_items)
    }
    else {
      let newlist = food_items.filter((items) => (items.food_category === category))
      setcate(newlist)
    }
  }






  return (
    <div className='bg-[#ffe8d2] w-full min-h-screen relative'>
      <Navbar />
      {(!input ? <div className='flex justify-center md:gap-14  gap-3 items-center px-4 flex-wrap'>
        {Categories.map((item, idx) => (
          <div
            key={idx}
            onClick={() => { filter(item.name) }}
            className='bg-white rounded shadow-xl px-4 py-2 cursor-pointer hover:bg-green-200 active:scale-80 transition-all duration-150 active:bg-green-200' >
            <h1> {item.icon}</h1>
            <h1 className='text-center md:text-xl capitalize text-sm'>{item.name}</h1>
          </div>
        )
        )}
      </div> : null)}

        

      <div className='w-full flex flex-wrap gap-5 px-5 justify-center items-center py-4'>
          {cate.length>1? cate.map((items, idx) => (<Card key={idx} id={items.id} Name={items.food_name} image={items.food_image} type={items.food_type} price={items.price} />)):<div className='text-2xl text-center font-semibold text-green-500'>
            
            No dish Found.......</div>}
        

      </div>

      <div className={`w-full md:w-[40vw] overflow-y-scroll h-full fixed top-0 right-0 bg-white shadow-xl transition-all duration-500 flex flex-col items-center py-6 px-4 ${showCart ? "translate-x-0" : "translate-x-full"}`}>
        <header className='w-full flex justify-between items-center px-6 py-4'>
          <span className='text-xl text-green-400 font-semibold uppercase'>order items </span>
          <span className='text-xl text-green-400 size-7 cursor-pointer hover:text-green-700 '
            onClick={() => {
              setshowCart(false)
            }}
          > <RxCross1 /></span>
        </header>

        {items.length>0 ?  <>

<div className='flex flex-col gap-5 mt-8 w-full '>
    {items.map((item,idx) => (
      <MiniCard key={idx} id={item.id} name={item.name} price={item.price} qty={item.qty} image={item.image} />
    ))}
  </div>
  <div className='w-full border-t-2 border-gray-400 mt-7 flex flex-col gap-1 px-4 py-2 border-b-2'>
    <div className='subtotal flex justify-between items-center p-4 '>
      <span className='text-lg text-gray-700 '>Subtotal</span>
      <span className='text-green-500 text-lg font-semibold'>Rs {totalPrice}/-</span>
    </div>
    <div className='delivery flex justify-between items-center p-4 '>
      <span className='text-lg text-gray-700 '>Delivery Fee </span>
      <span className='text-green-500 text-lg font-semibold'>Rs {deliveryFee}/-</span>
    </div>
    <div className='taxes flex justify-between items-center p-4'>
      <span className='text-lg text-gray-700 '>Taxes</span>
      <span className='text-green-500 text-lg font-semibold'>Rs {taxes}/-</span>
    </div>
  </div>
  <div className="grandtotal w-full flex justify-between items-center  p-4">
    <span className='text-2xl text-gray-900'>Total</span>
    <span className='text-green-500 text-2xl font-semibold'>Rs {grandTotal}/-</span>
  </div>

  <button
  onClick={()=>dispatch(callingToast("Order Placed...✅"))}
  className='w-[80%] px-4 py-2 mt-5 bg-green-500 text-white rounded-lg hover:bg-green-300 transition-all duration-250  active:scale-90'>Place Order</button>

</>: <div className='text-green-500 text-center text-2xl font-semibold pt-5'>Empty Card</div>}
     
        
        
      </div>

    </div>
  )
}

export default Home