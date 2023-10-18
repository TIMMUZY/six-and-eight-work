import { createSlice } from "@reduxjs/toolkit";
import fetchAllUsers from "../creators/usersCreators";

const initialState = {
    users: [],
    isLoading: false,
    isError: '',
}

const usersSlice = createSlice({
    initialState,
    name: 'users',
    reducers:{
//         setUsers: (state, action) =>{
//             state.isError = '';
//             state.isLoading = false;
//             state.users = action.payload;
//         },
//         setLoading: (state, action) =>{
//             state.isError = '';
//             state.isLoading = true;
//             state.users = [];
//         },
//         setError: (state, action) =>{
//             state.isError = 'Something hase gone wrong';
//             state.isLoading = false;
//             state.users = [];
//         }
        
//     }
// })
    },

extraReducers: (builder) => {
    builder.addCase(fetchAllUsers.fulfilled, (state, action)=>{
        state.isError = '';
        state.isLoading = false;
        state.users = action.payload;
    })
    builder.addCase(fetchAllUsers.pending, (state, action)=>{
        state.isError = '';
        state.isLoading = true;
        state.users = [];
    })
    builder.addCase(fetchAllUsers.rejected, (state, action)=>{
        state.isError = action.payload;
        state.isLoading = false;
        state.users = [];
    })
}

})
const usersReducer = usersSlice.reducer;

// export const { setError, setLoading, setUsers } = usersSlice.actions;

export default usersReducer;