import React, { useState } from 'react'
import './AuthForm.css'

const AuthForm = () => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value)
  }
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <input type="text" placeholder="Login" onChange={handleLoginChange}/>
      <input type="password" placeholder="password" onChange={handlePasswordChange}/>
      <button type="submit" className="auth-submit">Sign In</button>
    </form>
  )
}

export default AuthForm
