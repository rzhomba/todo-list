import React, { useState, useCallback } from 'react'
import { Task } from './taskTypes'
import './TaskElement.css'

const TaskElement = (props: Task) => {
  const [completed, setCompleted] = useState(false)
  const [editing, setEditing] = useState(false)
  const [editContent, setEditContent] = useState<string | undefined>()

  // const editInputRef = createRef<HTMLInputElement>()
  const editInputRef = useCallback((node: HTMLTextAreaElement) => {
    if (editing && node !== null) {
      node.value = props.description
    }
  }, [editing])

  const handleStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompleted(e.target.checked)
  }
  const handleEditClick = () => {
    setEditing(!editing)
    setEditContent(props.description)
  }
  const handleEditTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditContent(e.target.value)
  }
  const handleEditSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert(editing)
  }

  const editBtnText = editing ? 'cancel' : 'edit'

  return (
    <div className="task-wrapper">
      <div className="task-status">
        <input type="checkbox" checked={completed} onChange={handleStatusChange} className={editing ? 'hidden' : ''}/>
      </div>
      <div className="task">
        <div>
          <span className="task-user">{props.user}</span>
          <span className="task-email">{props.email}</span>
          <button className="task-edit" onClick={handleEditClick}>
            {editBtnText}
          </button>
        </div>
        <div className={`task-text ${editing ? 'hidden' : ''}`}>{props.description}</div>
        <form className={`task-edit-form ${!editing ? 'hidden' : ''}`} onSubmit={handleEditSave}>
          <textarea className="task-edit-textarea" ref={editInputRef} onChange={handleEditTextareaChange}/>
          <button className="task-edit-submit" type="submit">Save</button>
        </form>
      </div>
    </div>
  )
}

export default TaskElement
