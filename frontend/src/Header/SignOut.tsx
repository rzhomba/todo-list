import React from 'react'
import { useAppDispatch } from '../hooks'
import './SignOut.css'
import { signOut } from '../Auth/authSlice'

const SignOut = () => {
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

export default SignOut
