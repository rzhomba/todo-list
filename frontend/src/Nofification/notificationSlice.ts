import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

type NotificationType = 'success' | 'warning'

interface NotificationState {
  visible: boolean
  type: NotificationType
  message: string
}

const initialState: NotificationState = {
  visible: false,
  type: 'success',
  message: ''
}

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    showSuccess: (state, action: PayloadAction<string>) => {
      state.visible = true
      state.type = 'success'
      state.message = action.payload
    },
    showWarning: (state, action: PayloadAction<string>) => {
      state.visible = true
      state.type = 'warning'
      state.message = action.payload
    },
    hideNotification: (state) => {
      state.visible = false
    }
  }
})

export const {
  showSuccess,
  showWarning,
  hideNotification
} = notificationSlice.actions

export const selectNotification = (state: RootState) => state.notification

export default notificationSlice.reducer
