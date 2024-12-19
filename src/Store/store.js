import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "../Slices/ToDoSlices";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});