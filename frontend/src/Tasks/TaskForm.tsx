import React, { useState } from 'react'
import './TaskForm.css'

const TaskForm = () => {
  const [isFormVisible, setFormVisibility] = useState(false)

  const handleAddClick = () => {
    setFormVisibility(!isFormVisible)
  }

  const [user, setUser] = useState('')
  const [email, setEmail] = useState('')
  const [description, setDescription] = useState('')

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser(e.target.value)
  }
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }
  const handleTaskChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  const addBtnText = isFormVisible ? 'Cancel' : 'Add new task'

  return (
    <div className="form-wrapper">
      <button className={`form-add ${isFormVisible ? 'button-active' : ''}`} onClick={handleAddClick}>
        {addBtnText}
      </button>
      <form className={`form ${!isFormVisible ? 'form-hidden' : ''}`} onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" onChange={handleNameChange}/>
        <input type="email" placeholder="E-Mail" onChange={handleEmailChange}/>
        <textarea className="form-textarea" placeholder="Task" onChange={handleTaskChange}/>
        <button className="form-submit" type="submit">Add task</button>
      </form>
    </div>
  )
}

export default TaskForm
