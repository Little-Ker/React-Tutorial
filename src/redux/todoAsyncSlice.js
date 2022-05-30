import { createSlice } from "@reduxjs/toolkit"
export const todoSlice = createSlice({
  name: "todoAsync",
  initialState: {
    todoList: [
        {id: 1, name: "aaa"},
        {id: 2, name: "bbb"},
    ]
  },
  reducers: {
    addTodo:(state, action) => {
        const item = {
            id: new Date().getTime(),
            name: action.payload
        }
        state.todoList.push(item)
    }
  }
})

export const todoAsync = todo => dispatch => {
    setTimeout(() => {
        console.log('async:', todo)
        dispatch(addTodo(todo))
    }, 1000)
}

export const { addTodo } = todoSlice.actions
export default todoSlice.reducer