import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { AppThunk } from '../appThunk'
import { setPagesTotal } from '../Pagination/paginationSlice'
import { Task, TaskListResponse, TaskResponse, TaskUpdate } from './taskTypes'
import { showSuccess, showWarning } from '../Nofification/notificationSlice'
import axios from 'axios'
import EmailValidator from 'email-validator'

interface TaskState {
  tasks: Task[]
  addTaskForm: {
    formVisible: boolean
    user: string
    email: string
    description: string
  }
  editTaskForm: {
    id: number
    description: string
  }
}

const initialState: TaskState = {
  tasks: [],
  addTaskForm: {
    formVisible: false,
    user: '',
    email: '',
    description: ''
  },
  editTaskForm: {
    id: -1,
    description: ''
  }
}

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    setTasks: (state, action: PayloadAction<Task[]>) => {
      state.tasks = action.payload
    },
    addTask: (state, action: PayloadAction<Task>) => {
      if (state.tasks.length < 3) {
        state.tasks.push(action.payload)
      }
    },
    updateTask: (state, action: PayloadAction<TaskUpdate>) => {
      const index = state.tasks.findIndex(task => task.id === action.payload.id)
      state.tasks[index] = {
        ...state.tasks[index],
        ...action.payload,
        edited: true
      }
    },
    clearTasks: (state) => {
      state.tasks = initialState.tasks
    },
    setAddFormVisibility: (state, action: PayloadAction<boolean>) => {
      state.addTaskForm.formVisible = action.payload
    },
    setAddFormUser: (state, action: PayloadAction<string>) => {
      state.addTaskForm.user = action.payload
    },
    setAddFormEmail: (state, action: PayloadAction<string>) => {
      state.addTaskForm.email = action.payload
    },
    setAddFormDescription: (state, action: PayloadAction<string>) => {
      state.addTaskForm.description = action.payload
    },
    clearAddForm: (state) => {
      state.addTaskForm = initialState.addTaskForm
    },
    setEditId: (state, action: PayloadAction<number>) => {
      if (state.editTaskForm.id === action.payload) {
        state.editTaskForm.id = initialState.editTaskForm.id
      } else {
        state.editTaskForm.id = action.payload
      }
    },
    setEditDescription: (state, action: PayloadAction<string>) => {
      state.editTaskForm.description = action.payload
    },
    clearEditForm: (state) => {
      state.editTaskForm = initialState.editTaskForm
    }
  }
})

export const {
  clearTasks,
  setAddFormVisibility,
  setAddFormUser,
  setAddFormEmail,
  setAddFormDescription,
  clearAddForm,
  setEditId,
  setEditDescription,
  clearEditForm
} = taskSlice.actions

const {
  setTasks,
  addTask,
  updateTask
} = taskSlice.actions

export const fetchTasks = (): AppThunk =>
  async (dispatch, getState) => {
    const { sortBy, sortDir } = getState().sort
    const { currentPage } = getState().pagination
    const { data } = await axios.get<TaskListResponse>('task/', {
      params: {
        sortBy,
        sortDir,
        offset: currentPage
      }
    })

    dispatch(clearTasks())
    dispatch(setTasks(data.tasks))
    dispatch(setPagesTotal(Math.ceil(data.total / 3)))
  }

export const createTask = (): AppThunk =>
  async (dispatch, getState) => {
    const { user, email, description } = getState().task.addTaskForm
    if (!EmailValidator.validate(email)) {
      dispatch(showWarning('Specify valid email address.'))
      return
    } else if (user.length === 0 || description.length === 0) {
      dispatch(showWarning('Task field cannot be empty.'))
      return
    }

    const taskCount = getState().task.tasks.length
    const { data } = await axios.post<TaskResponse>('task/', {
      user,
      email,
      description
    })

    if (taskCount < 3) {
      dispatch(addTask(data.task))
    } else {
      dispatch(fetchTasks())
    }

    dispatch(setPagesTotal(Math.ceil(data.total / 3)))
    dispatch(clearAddForm())
    dispatch(showSuccess('New task was successfully created!'))
  }

export const editTask = (): AppThunk =>
  async (dispatch, getState) => {
    const { tasks, editTaskForm } = getState().task
    const { id, description } = editTaskForm
    if (id === -1 || description.length === 0) {
      return
    }

    const task = tasks.find(t => t.id === id)
    if (!task) {
      return
    }

    await axios.put(`task/edit/${task.id}`, {
      description
    })

    dispatch(updateTask({
      id: task.id,
      description,
      completed: task.completed
    }))
    dispatch(clearEditForm())
  }

export const markTask = (id: number): AppThunk =>
  async (dispatch, getState) => {
    const { tasks } = getState().task
    const task = tasks.find(t => t.id === id)
    if (!task) {
      return
    }

    const completed = task.completed

    await axios.put(`task/mark/${task.id}`, {
      completed: !completed
    })

    dispatch(updateTask({
      id: task.id,
      description: task.description,
      completed: !completed || task.completed
    }))
  }

export const selectTask = (state: RootState) => state.task

export default taskSlice.reducer
