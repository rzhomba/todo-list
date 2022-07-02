import React from 'react'
import AuthForm from '../Auth/AuthForm'
import Header from '../Header/Header'
import BackBtn from '../Header/BackBtn'

const AuthPage = () => {
  return (
    <div>
      <Header button={<BackBtn/>}/>
      <AuthForm/>
    </div>
  )
}

export default AuthPage
