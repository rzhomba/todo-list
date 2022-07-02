import React, { useCallback, useLayoutEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../hooks'
import { selectAuth, setLogin, setPassword, signIn } from './authSlice'
import { useNavigate } from 'react-router-dom'
import './AuthForm.css'

const AuthForm = () => {
  const { loggedIn, authForm } = useAppSelector(selectAuth)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const loginInputRef = useCallback((node: HTMLInputElement) => {
    if (node !== null) {
      node.value = authForm.login
    }
  }, [authForm.login])
  const passwordInputRef = useCallback((node: HTMLInputElement) => {
    if (node !== null) {
      node.value = authForm.password
    }
  }, [authForm.password])

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setLogin(e.target.value))
  }
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setPassword(e.target.value))
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(signIn())
  }

  useLayoutEffect(() => {
    if (loggedIn) {
      navigate('/')
    }
  }, [loggedIn])

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <input type="text" placeholder="Login" name="test" onChange={handleLoginChange} ref={loginInputRef}/>
      <input type="password" placeholder="password" onChange={handlePasswordChange} ref={passwordInputRef}/>
      <button type="submit" className="auth-submit">Sign In</button>
    </form>
  )
}

export default AuthForm
