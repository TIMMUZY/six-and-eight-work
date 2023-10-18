import { createSlice } from "@reduxjs/toolkit";
import fetchAllCart from "../creators/cartCreator"

const initialState = {
    cart: [],
    cartStatus: 'empty',
    cartError: '',
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCart: (state, action) => {
            state.cart = action.payload;
            state.cartStatus = action.payload.length ? 'fulfilled' : 'empty';
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllCart.pending, (state, action) => {
            state.cartStatus = 'pending';
            state.cartError = ''
        });
        builder.addCase(fetchAllCart.fulfilled, (state, action) => {
            state.cart = action.payload;
            state.cartStatus = action.payload.length ? 'fulfilled' : 'empty';
            state.cartError = ''
        });
        builder.addCase(fetchAllCart.rejected, (state, action) => {
            state.cart = [];
            state.cartStatus = 'rejected';
            state.cartError = action.payload
        });
    }
});

const cartReducer = cartSlice.reducer;

export const { setCart } = cartSlice.actions;
export default cartReducer;