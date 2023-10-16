import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api";

const fetchAllCart = createAsyncThunk("cart/fetchAll", async (payload, thunkApi) => {
    try {
        const response = await api.getCartItems();
        return response.data;
    } catch (err) {
        return thunkApi.rejectWithValue(err.response ? err.response.data : err.massage);
    }
});
const addItemCartFetch = createAsyncThunk("cart/fetchItemCart", async (payload, thunkApi) => {
    try {
        const cart = await api.getCartItems()
        if (cart.data.length !== 0) {
            const el = cart.data.find((el) => {
                if(el.id===payload.id){
                    return el
                }
             })
            if (el !== undefined) {
                const edit_item = { ...el }
                edit_item.count = +edit_item.count + 1
                await api.editCartItem(edit_item)
                const cart = await api.getCartItems()
                return cart.data
            } else {
                await api.createCartItem({
                    ...payload,
                    count: 1
                })
                const cart = await api.getCartItems()
                return cart.data
            }
        } else {
            const newobj = {
                ...payload,
                count: 1
            }
            await api.createCartItem(newobj)
            const cart = await api.getCartItems()
            return cart.data
        }
    } catch (err) {
        return thunkApi.rejectWithValue(err.response ? err.response.data : err.massage);
    }
});
export { addItemCartFetch, fetchAllCart }