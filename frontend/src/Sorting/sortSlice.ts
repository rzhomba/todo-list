import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { AppThunk } from '../appThunk'
import { fetchTasks } from '../Tasks/taskSlice'
import { SortBy, SortDir } from './sortTypes'

interface SortState {
  sortBy: SortBy
  sortDir: SortDir
}

const initialState: SortState = {
  sortBy: 'user',
  sortDir: 'ascending'
}

const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    setSortBy: (state, action: PayloadAction<SortBy>) => {
      state.sortBy = action.payload
    },
    setSortDir: (state, action: PayloadAction<SortDir>) => {
      state.sortDir = action.payload
    }
  }
})

const {
  setSortBy,
  setSortDir
} = sortSlice.actions

export const sortBy = (by: SortBy): AppThunk =>
  async (dispatch) => {
    dispatch(setSortBy(by))
    dispatch(fetchTasks())
  }

export const sortDir = (dir: SortDir): AppThunk =>
  async (dispatch) => {
    dispatch(setSortDir(dir))
    dispatch(fetchTasks())
  }

export const selectSort = (state: RootState) => state.sort

export default sortSlice.reducer
