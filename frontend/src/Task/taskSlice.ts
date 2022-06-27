import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { Task } from '../types/task'

interface TaskState {
  tasks: Task[]
}

const initialState: TaskState = {
  tasks: []
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
    removeTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload)
    }
  }
})

export const { initialize, addTask, editTask, markTask, removeTask } = taskSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value

export default taskSlice.reducer
