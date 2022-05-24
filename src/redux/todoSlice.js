import { createSlice } from "@reduxjs/toolkit";
export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    // ...
  },
  reducers: {
    // ...
  }
})
 
export const { addTodo } = todoSlice.actions
export default todoSlice.reducer