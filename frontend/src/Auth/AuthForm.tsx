import React, { useLayoutEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../hooks'
import { selectAuth, setLogin, setPassword, signIn } from './authSlice'
import { useNavigate } from 'react-router-dom'
import './AuthForm.css'

const AuthForm = () => {
  const { loggedIn } = useAppSelector(selectAuth)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

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
      <input type="text" placeholder="Login" onChange={handleLoginChange}/>
      <input type="password" placeholder="password" onChange={handlePasswordChange}/>
      <button type="submit" className="auth-submit">Sign In</button>
    </form>
  )
}

export default AuthForm
