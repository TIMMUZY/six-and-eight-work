import { configureStore, combineReducers } from "@reduxjs/toolkit";
import countReducer from "./slices/counterSlice";
import usersReducer from "./slices/UsersSlice";
import bookReducer from "./slices/bookSlice"
import cartReducer from "./slices/cartSlice";

const rootReducer = combineReducers({
     count: countReducer,
     users: usersReducer, 
     books: bookReducer, 
     cart: cartReducer, 
})
const store = configureStore({ reducer: rootReducer })

export default store;   