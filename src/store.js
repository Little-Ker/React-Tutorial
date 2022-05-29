import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './redux/todoSlice'
import todoAsyncReducer from './redux/todoAsyncSlice'
import todoAxiosReducer from './redux/todoAxiosSlice'
import navListReducer from './redux/navListSlice'

export const store = configureStore({
  reducer: {
      todoList: todoReducer,
      todoAsync: todoAsyncReducer,
      todoAxios: todoAxiosReducer,
      navList: navListReducer
  },
})