import React, { useCallback } from 'react'
import { useAppSelector, useAppDispatch } from '../hooks'
import { markTask, editTask, setEditDescription, setEditId } from './taskSlice'
import { selectAuth } from '../Auth/authSlice'
import { Task } from './taskTypes'
import './TaskElement.css'

interface TaskElementProps extends Task {
  editing: boolean
}

const TaskElement = (props: TaskElementProps) => {
  const { loggedIn } = useAppSelector(selectAuth)
  const dispatch = useAppDispatch()

  const editInputRef = useCallback((node: HTMLTextAreaElement) => {
    if (props.editing && node !== null) {
      node.value = props.description
    }
  }, [props.editing])

  const handleStatusChange = () => {
    dispatch(markTask(props.id))
  }
  const handleEditClick = () => {
    dispatch(setEditId(props.id))
    dispatch(setEditDescription(props.description))
  }
  const handleEditTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setEditDescription(e.target.value))
  }
  const handleEditSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(editTask())
  }

  return (
    <div className="task-wrapper">
      <div className="task-checkbox">
        <input className={props.editing || !loggedIn ? 'hidden' : ''}
               type="checkbox"
               checked={props.completed}
               onChange={handleStatusChange}/>
      </div>

      <div className="task">
        <div>
          <span className="task-user">{props.user}</span>
          <span className="task-email">{props.email}</span>
          <button className={`task-edit ${!loggedIn ? 'hidden' : ''}`}
                  onClick={handleEditClick}>
            {props.editing ? 'cancel' : 'edit'}
          </button>
        </div>

        <div className={`task-text ${props.editing ? 'hidden' : ''}`}>
          {props.description}
        </div>

        <form className={`task-edit-form ${!props.editing ? 'hidden' : ''}`}
              onSubmit={handleEditSave}>
          <textarea className="task-edit-textarea"
                    ref={editInputRef}
                    onChange={handleEditTextareaChange}/>
          <button className="task-edit-submit" type="submit">
            Save
          </button>
        </form>

        <div className="task-info">
          <div>
            Status:
            <span className={`task-status ${props.completed ? 'task-status-completed' : ''}`}>
              {props.completed ? 'completed' : 'pending'}
            </span>
          </div>

          <div className={`task-edited ${!props.edited ? 'hidden' : ''}`}>
            Edited by administrator
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaskElement
