import { createSlice } from "@reduxjs/toolkit";


const cartSlice=createSlice({
    
    
    name:"Cart",
   
    initialState:[],
    reducers:{
        addItem:(state,action) =>{
            
           let existItem= state.find((item)=>item.id===action.payload.id)
           console.log(existItem);
           if(existItem){
 
            return state.map((item)=>(item.id===action.payload.id ?{...item,qty:item.qty+1}:item))
           }
           else{

               state.push(action.payload)
           }
      
        },
        removeItem:(state,action) =>{
        
           return state.filter(item => item.id!==action.payload) 
        },
        IncreamentQty:(state,action)=>{
           return state.map((item)=>(item.id===action.payload ?{...item,qty:item.qty+1}:item))
        },
        DecreamentQty:(state,action)=>{
            return state.map((item)=>(item.id===action.payload?{...item,qty:item.qty-1}:item))
        }
    }
})

export const{addItem,removeItem,IncreamentQty,DecreamentQty} =cartSlice.actions

export default cartSlice.reducer