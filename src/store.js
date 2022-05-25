import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './redux/todoSlice'
import todoAsyncReducer from './redux/todoAsyncSlice'

export const store = configureStore({
  reducer: {
      todoList: todoReducer,
      todoAsync: todoAsyncReducer
  },
})