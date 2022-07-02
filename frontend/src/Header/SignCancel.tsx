import React from 'react'
import { Link } from 'react-router-dom'
import './Sign.css'

const SignCancel = () => {
  return (
    <Link to="/">
      <button className="sign-cancel">
        Cancel
      </button>
    </Link>
  )
}

export default SignCancel
