import React from 'react'
import AuthForm from '../Auth/AuthForm'
import Header from '../Header/Header'
import SignCancel from '../Header/SignCancel'

const AuthPage = () => {
  return (
    <div>
      <Header button={<SignCancel/>}/>
      <AuthForm/>
    </div>
  )
}

export default AuthPage
