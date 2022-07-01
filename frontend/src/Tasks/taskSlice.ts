import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { Task } from '../types/task'

interface TaskState {
  tasks: Task[]
  page: number
}

const initialState: TaskState = {
  tasks: [],
  page: 1
}

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    initialize: (state, action: PayloadAction<Task[]>) => {
      state.tasks = action.payload
    },
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload)
    },
    editTask: (state, action: PayloadAction<{ id: string, text: string }>) => {
      // TODO: edit the task
    },
    markTask: (state, action: PayloadAction<{ id: string, completed: boolean }>) => {
      // TODO: mark the task
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload
    }
  }
})

export const { initialize, addTask, editTask, markTask, setPage } = taskSlice.actions

export const selectTask = (state: RootState) => state.task

export default taskSlice.reducer
