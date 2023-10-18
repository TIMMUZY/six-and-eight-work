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

export default fetchAllCart;