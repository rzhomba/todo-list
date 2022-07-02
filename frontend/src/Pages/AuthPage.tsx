import React from 'react'
import AuthForm from '../Auth/AuthForm'
import Header from '../Header/Header'
import SignCancelBtn from '../Header/SignCancelBtn'

const AuthPage = () => {
  return (
    <div>
      <Header button={<SignCancelBtn/>}/>
      <AuthForm/>
    </div>
  )
}

export default AuthPage
