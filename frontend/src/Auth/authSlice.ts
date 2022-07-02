import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { AppThunk } from '../appThunk'
import axios from 'axios'
import { showWarning } from '../Nofification/notificationSlice'

interface AuthState {
  loggedIn: boolean,
  authForm: {
    login: string
    password: string
  }
}

const initialState: AuthState = {
  loggedIn: false,
  authForm: {
    login: '',
    password: ''
  }
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.loggedIn = action.payload
    },
    setLogin: (state, action: PayloadAction<string>) => {
      state.authForm.login = action.payload
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.authForm.password = action.payload
    },
    clearAuthForm: (state) => {
      state.authForm = initialState.authForm
    }
  }
})

export const {
  setLoggedIn,
  setLogin,
  setPassword,
  clearAuthForm
} = authSlice.actions

export const signIn = (): AppThunk =>
  async (dispatch, getState) => {
    const { login, password } = getState().auth.authForm
    try {
      await axios.post('auth/', {
        login,
        password
      })
      dispatch(setLoggedIn(true))
      localStorage.setItem('authenticated', 'true')
    } catch {
      dispatch(showWarning('Invalid authentication credentials.'))
    } finally {
      dispatch(clearAuthForm())
    }
  }

export const signOut = (): AppThunk =>
  async dispatch => {
    const { status } = await axios.delete('auth/')
    if (status === 200) {
      dispatch(setLoggedIn(false))
      localStorage.setItem('authenticated', 'false')
    }
  }

export const selectAuth = (state: RootState) => state.auth

export default authSlice.reducer
