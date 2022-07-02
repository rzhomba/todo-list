import React from 'react'
import { Link } from 'react-router-dom'
import './SignBtn.css'
import { useAppSelector } from '../hooks'
import { selectAuth } from '../Auth/authSlice'

const BackBtn = () => {
  const { loggedIn } = useAppSelector(selectAuth)

  return (
    <Link to="/">
      <button className="sign-cancel">
        {loggedIn ? 'Return' : 'Cancel'}
      </button>
    </Link>
  )
}

export default BackBtn
