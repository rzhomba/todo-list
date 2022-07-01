import React from 'react'
import { useAppSelector, useAppDispatch } from '../hooks'
import './TaskForm.css'
import {
  createTask,
  selectTask,
  setAddFormDescription,
  setAddFormEmail,
  setAddFormUser,
  setAddFormVisibility
} from './taskSlice'

const TaskForm = () => {
  const { formVisible } = useAppSelector(selectTask).addTaskForm
  const dispatch = useAppDispatch()

  const handleAddClick = () => {
    dispatch(setAddFormVisibility(!formVisible))
  }

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setAddFormUser(e.target.value))
  }
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setAddFormEmail(e.target.value))
  }
  const handleTaskChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setAddFormDescription(e.target.value))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    dispatch(createTask())
  }

  const addBtnText = formVisible ? 'Cancel' : 'Add new task'

  return (
    <div className="form-wrapper">
      <button className={`form-add ${formVisible ? 'button-active' : ''}`} onClick={handleAddClick}>
        {addBtnText}
      </button>
      <form className={`form ${!formVisible ? 'form-hidden' : ''}`} onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" onChange={handleNameChange}/>
        <input type="email" placeholder="E-Mail" onChange={handleEmailChange}/>
        <textarea className="form-textarea" placeholder="Task" onChange={handleTaskChange}/>
        <button className="form-submit" type="submit">Add task</button>
      </form>
    </div>
  )
}

export default TaskForm
