import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
let buttonSlice=createSlice({
    name:"Toast",
    initialState:[],
    reducers:{
        callingToast:(state,action)=>{
         return state.push(  toast.success(action.payload, {
                position: "top-right",
                autoClose: 2700,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                }))
                
        }
    }
})

export const {callingToast} =buttonSlice.actions
export default buttonSlice.reducer