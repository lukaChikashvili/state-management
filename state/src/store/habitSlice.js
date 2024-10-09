import { createSlice } from "@reduxjs/toolkit";


// initial state
const initialState = {
    habits: []
}

const habitSlice = createSlice({
    name: "habits",
    initialState,
    reducers: {
        addHabit: (state, action) => {
         state.habits.push(action.payload)
        }
    }
});



export const { addHabit } = habitSlice.actions;
export default habitSlice.reducer

