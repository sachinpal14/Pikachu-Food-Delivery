import { configureStore } from "@reduxjs/toolkit";
import CartSlice from './CartSlice'
import buttonSlice from './Toast'
export const store=configureStore({
    reducer:{
        cart:CartSlice,
        toast:buttonSlice
    }
})