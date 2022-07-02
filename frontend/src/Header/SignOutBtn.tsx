import React from 'react'
import { useAppDispatch } from '../hooks'
import { signOut } from '../Auth/authSlice'
import './SignBtn.css'

const SignOutBtn = () => {
  const dispatch = useAppDispatch()

  const handleClick = () => {
    dispatch(signOut())
  }

  return (
    <button className="sign-out" onClick={handleClick}>
      Log out
    </button>
  )
}

export default SignOutBtn
