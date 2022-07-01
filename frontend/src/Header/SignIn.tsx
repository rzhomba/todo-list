import React from 'react'
import { Link } from 'react-router-dom'
import './SignIn.css'

const SignIn = () => {
  return (
    <Link to="/auth">
      <button className="sign-in">
        Sign in
      </button>
    </Link>
  )
}

export default SignIn
