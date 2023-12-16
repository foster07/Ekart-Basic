import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    fullDataSet:[],
    cartDataSet:[],
    
}

const mySlice =createSlice({
    name:'myfirstSlice',
    initialState,
    reducers:{
        fullData: (state,action)=>{
            console.log('action.payload',action.payload);
            return{
                ...state,fullDataSet:action.payload
            }
        },
        addToCart:(state,action)=>{
           state.cartDataSet.push(action.payload);
        },
        removeFromCart : (state,action) =>{
            return{
                ...state,
                cartDataSet: state.cartDataSet.filter(item => item.id !== (action.payload))
            }
        }
    }
})

export  const {fullData,addToCart,removeFromCart} =mySlice.actions;
export default mySlice.reducer