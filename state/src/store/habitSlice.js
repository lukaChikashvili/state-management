import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    tasks: []
}

export const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
       addTodo: (state, action) => {
          state.tasks.push({id: Date.now(), text: action.payload, completed: true});

       }
    }


});


export const { addTodo } = taskSlice.actions;

export default taskSlice.reducer;








