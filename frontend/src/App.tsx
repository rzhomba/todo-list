import React from 'react'
import './App.css'
import Header from './Header'
import TaskList from './Task/TaskList'
import 'normalize.css'

const App = () => {
  return (
    <div>
      <Header/>
      <TaskList/>
    </div>
  )
}

export default App
