import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './SignBtn.css'
import { useAppSelector } from '../hooks'
import { selectAuth } from '../Auth/authSlice'

const BackBtn = () => {
  const { loggedIn } = useAppSelector(selectAuth)
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/')
  }

  return (
    <Link to="/">
      <button className="sign-cancel" onClick={handleClick}>
        {loggedIn ? 'Return' : 'Cancel'}
      </button>
    </Link>
  )
}

export default BackBtn
