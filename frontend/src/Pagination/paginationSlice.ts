import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { AppThunk } from '../appThunk'
import { fetchTasks } from '../Tasks/taskSlice'

interface PaginationState {
  pagesTotal: number
  currentPage: number
}

const initialState: PaginationState = {
  pagesTotal: 0,
  currentPage: 0
}

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setPagesTotal: (state, action: PayloadAction<number>) => {
      state.pagesTotal = action.payload
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      if (action.payload >= 0 && action.payload < state.pagesTotal) {
        state.currentPage = action.payload
      }
    }
  }
})

export const {
  setPagesTotal
} = paginationSlice.actions

const {
  setCurrentPage
} = paginationSlice.actions

export const setPage = (page: number): AppThunk =>
  async (dispatch, getState) => {
    const total = getState().pagination.pagesTotal
    if (page < 0 || page >= total) {
      return
    }

    dispatch(setCurrentPage(page))
    dispatch(fetchTasks())
  }

export const selectPagination = (state: RootState) => state.pagination

export default paginationSlice.reducer
