import React, { useEffect } from 'react'
import { useAppDispatch } from './hooks'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TaskPage from './Pages/TaskPage'
import AuthPage from './Pages/AuthPage'
import './App.css'
import 'normalize.css'
import { setLoggedIn } from './Auth/authSlice'
import Notification from './Nofification/Notification'

const App = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const authenticated = localStorage.getItem('authenticated')
    const loggedIn = !!(authenticated && authenticated === 'true')
    dispatch(setLoggedIn(loggedIn))
  }, [])

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TaskPage/>}/>
          <Route path="/auth" element={<AuthPage/>}/>
        </Routes>
      </BrowserRouter>
      <Notification/>
    </div>
  )
}

export default App
