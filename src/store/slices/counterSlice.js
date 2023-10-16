import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    count: 0,
}

const countSlice = createSlice({
    initialState,
    name: 'counter',
    reducers: {
      trigger: (state, actions) => {
        state.count += actions.payload;
      }
    },
})
const countReducer = countSlice.reducer;

export const { trigger } = countSlice.actions;
export default countReducer;