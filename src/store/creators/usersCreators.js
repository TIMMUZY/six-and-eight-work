import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api";




// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { setError, setLoading, setUsers } from "../slices/usersSlice"

// const fetchAllUsers = () => (dispatch) => {
//     dispatch(setLoading(true))
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((res) => res.json())
//     .then((data) => dispatch(setUsers(data)))
//     .catch((err) => dispatch(setError(err.message)))
// };


// const customDispatch = (action) => {
//     if(typeof action === 'object'){

//     }
//     else if (typeof action === 'function'){
//         action(customDispatch)
//     }
// }

const fetchAllUsers = createAsyncThunk('users/fetchAll', async(payload, thunkApi) => {
    try{
        const response = await api.getUsers();
        return response.data;
    }catch(err){
        return thunkApi.rejectWithValue(err.message ? err.message: 'Something has gone wrong')
    }
})
 

export default fetchAllUsers;