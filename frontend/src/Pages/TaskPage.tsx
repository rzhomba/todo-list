import React from 'react'
import { useAppSelector } from '../hooks'
import { selectAuth } from '../Auth/authSlice'
import Header from '../Header/Header'
import TaskForm from '../Tasks/TaskForm'
import SortPanel from '../Sorting/SortPanel'
import TaskList from '../Tasks/TaskList'
import PageList from '../Pagination/PageList'
import SignIn from '../Header/SignIn'
import SignOut from '../Header/SignOut'

const TaskPage = () => {
  const { loggedIn } = useAppSelector(selectAuth)

  const button = loggedIn ? <SignOut/> : <SignIn/>

  return <div>
    <Header button={button}/>
    <TaskForm/>
    <SortPanel/>
    <TaskList/>
    <PageList/>
  </div>
}

export default TaskPage
