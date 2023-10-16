import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api"


export const fetchAlBooks = createAsyncThunk("books/fetchAll", async (payload, thunkApi) => {
    try {
        const response = await api.getBooks();
        console.log();
        return response.data;
    } catch (err) {
        return thunkApi.rejectWithValue(err.response ? err.response.data : err.message);
    };
});
export default fetchAlBooks