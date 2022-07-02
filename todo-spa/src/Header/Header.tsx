import React from 'react'
import './Header.css'

interface HeaderProps {
  button: React.ReactNode
}

const Header = (props: HeaderProps) => {
  return (
    <div className="header">
      <h1 className="header-title">To-Do List</h1>
      {props.button}
    </div>
  )
}

export default Header
