import React from 'react'
import { Link } from 'react-router-dom'
import './SignBtn.css'

const SignCancelBtn = () => {
  return (
    <Link to="/">
      <button className="sign-cancel">
        Cancel
      </button>
    </Link>
  )
}

export default SignCancelBtn
