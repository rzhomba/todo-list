import { configureStore } from '@reduxjs/toolkit'
import taskReducer from './Tasks/taskSlice'
import sortSlice from './Sorting/sortSlice'
import paginationSlice from './Pagination/paginationSlice'
import authSlice from './Auth/authSlice'

export const store = configureStore({
  reducer: {
    task: taskReducer,
    sort: sortSlice,
    pagination: paginationSlice,
    auth: authSlice
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
