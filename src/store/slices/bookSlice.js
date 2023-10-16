import { createSlice } from '@reduxjs/toolkit';
import { fetchAlBooks } from '../creators/booksCreator';

const initialState = {
    books: [],
    isLoadingBooks: false,
    status: '',
};

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers:{
     setBooks: (state, action) => {
        state.books = action.payload;
    },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAlBooks.fulfilled, (state, action) =>{
            state.books = action.payload;
            state.isErrorBooks = '';
            state.status = 'fulfilled';
        });
        builder.addCase(fetchAlBooks.pending, (state, action) =>{
            state.books = [];
            state.isErrorBooks = '';
            state.status = 'pending';
        });
        builder.addCase(fetchAlBooks.rejected, (state, action) =>{
            state.books = [];
            state.isErrorBooks = action.payload;
            state.status = 'rejected';
        });

    }
})

const bookReducer = booksSlice.reducer;

export const { setBooks } = booksSlice.actions;
export default bookReducer;