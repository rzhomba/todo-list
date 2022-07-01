import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TaskPage from './Pages/TaskPage'
import AuthPage from './Pages/AuthPage'
import './App.css'
import 'normalize.css'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TaskPage/>}/>
        <Route path="/auth" element={<AuthPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
