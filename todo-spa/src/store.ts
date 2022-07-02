import { configureStore } from '@reduxjs/toolkit'
import taskReducer from './Tasks/taskSlice'
import sortSlice from './Sorting/sortSlice'
import paginationSlice from './Pagination/paginationSlice'
import authSlice from './Auth/authSlice'
import notificationSlice from './Nofification/notificationSlice'

export const store = configureStore({
  reducer: {
    task: taskReducer,
    sort: sortSlice,
    auth: authSlice,
    pagination: paginationSlice,
    notification: notificationSlice
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
