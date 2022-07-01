import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { AppThunk } from '../appThunk'
import axios from 'axios'

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
  setLogin,
  setPassword,
  clearAuthForm
} = authSlice.actions

const {
  setLoggedIn
} = authSlice.actions

export const signIn = (): AppThunk =>
  async (dispatch, getState) => {
    const { login, password } = getState().auth.authForm
    const { status } = await axios.post('auth/', {
      login,
      password
    })

    if (status === 200) {
      dispatch(setLoggedIn(true))
      dispatch(clearAuthForm())
    } else if (status === 401) {
      dispatch(clearAuthForm())
    }
  }

export const signOut = (): AppThunk =>
  async dispatch => {
    const { status } = await axios.delete('auth/')
    if (status === 200) {
      dispatch(setLoggedIn(false))
    }
  }

export const selectAuth = (state: RootState) => state.auth

export default authSlice.reducer
