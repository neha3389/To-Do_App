import { createSlice } from "@reduxjs/toolkit";

 const todoslice = createSlice({
    name:"todo",
    initialState:{
        tasks:[],
    },
    reducers:{
        addTodo : (state, action) =>{
            state.tasks.push(action.payload);
        },
    },
});

export const todoReducer = todoslice.reducer;
export const{addTodo} = todoslice.actions;