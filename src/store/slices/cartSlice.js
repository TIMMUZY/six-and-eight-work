import { createSlice } from '@reduxjs/toolkit'; 
import {fetchAllCart,addItemCartFetch}  from '../creators/cartCreator';
const initialState = {
    cart: [],
    cartStatus: 'fullfilled',
    cartError: '',
};
 
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCard: (state, action) => {
            state.cartStatus = action.payload.length ? 'fulfiled' : 'empty';
        },
        addItemCart:(state,action)=>{
            const newstate = {...state}
         if(  newstate.cart.length===0){
            const newPayload = {
                ...action.payload,
                count:1,
                total:action.payload.price
            }   
             newstate.cart.push(newPayload)
         } else{
            newstate.cart.map((item)=>{
                if(item.id === action.payload.id){
                    newstate.cart[item.id-1].count +=1
                }  
                else{

            const newPayload = {
                ...action.payload,
                count:1,
                total:action.payload.price
            }   
             newstate.cart.push(newPayload)
                }
            })
        
         }
                
            state.cart = newstate.cart
      
        }
    },

    extraReducers: (builder) => {
        builder.addCase(fetchAllCart.pending, (state, action) => {
            state.cartStatus = 'pending';
            state.cartError = '';
        });

        builder.addCase(fetchAllCart.fulfilled, (state, action) => {
        state.cart = action.payload;
        state.cartStatus = action.payload.length ? 'fulfilled' : 'empty';
        state.cartError = '';
    });

    builder.addCase(fetchAllCart.rejected, (state, action) => {
        state.cart = [];
        state.cartStatus = 'rejected';
        state.cartError = action.payload;
    });
    builder.addCase(addItemCartFetch.fulfilled,(state,action)=>{
  
        state.cartStatus = 'fulfilled'

        state.cart = action.payload
    })
   
}
});

const cartReducer = cartSlice.reducer;

export const { setCart ,addItemCart} = cartSlice.actions;
export default cartReducer;

