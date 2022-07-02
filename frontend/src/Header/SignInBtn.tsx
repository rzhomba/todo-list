import React from 'react'
import { Link } from 'react-router-dom'
import './SignBtn.css'

const SignInBtn = () => {
  return (
    <Link to="/auth">
      <button className="sign-in">
        Sign in
      </button>
    </Link>
  )
}

export default SignInBtn
