import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "../Slices/ToDoSlices";

 export default configureStore({
  reducer:{
    todos:todoReducer
  },
 }

)