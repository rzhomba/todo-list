import React from 'react'
import Header from '../Header/Header'
import TaskForm from '../Tasks/TaskForm'
import SortPanel from '../Sorting/SortPanel'
import TaskList from '../Tasks/TaskList'
import PageList from '../Pagination/PageList'
import SignIn from '../Header/SignIn'

const TaskPage = () => {
  return <div>
    <Header button={<SignIn/>}/>
    <TaskForm/>
    <SortPanel/>
    <TaskList/>
    <PageList/>
  </div>
}

export default TaskPage
