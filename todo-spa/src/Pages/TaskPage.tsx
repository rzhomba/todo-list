import React from 'react'
import { useAppSelector } from '../hooks'
import { selectAuth } from '../Auth/authSlice'
import Header from '../Header/Header'
import TaskForm from '../Tasks/TaskForm'
import SortPanel from '../Sorting/SortPanel'
import TaskList from '../Tasks/TaskList'
import Pagination from '../Pagination/Pagination'
import SignInBtn from '../Header/SignInBtn'
import SignOutBtn from '../Header/SignOutBtn'

const TaskPage = () => {
  const { loggedIn } = useAppSelector(selectAuth)

  const button = loggedIn ? <SignOutBtn/> : <SignInBtn/>

  return <div>
    <Header button={button}/>
    <TaskForm/>
    <SortPanel/>
    <TaskList/>
    <Pagination/>
  </div>
}

export default TaskPage
