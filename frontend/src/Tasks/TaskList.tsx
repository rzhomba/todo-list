import React, { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../hooks'
import TaskElement from './TaskElement'
import './TaskList.css'
import { clearTasks, fetchTasks, selectTask } from './taskSlice'
import { store } from '../store'

const TaskList = () => {
  const { tasks, editTaskForm } = useAppSelector(selectTask)
  const dispatch = useAppDispatch()

  useEffect(() => {
    store.dispatch(fetchTasks())

    return () => {
      dispatch(clearTasks())
    }
  }, [])

  return (
    <div className="tasks-list">
      {tasks.map(task => (
        <TaskElement key={`task-${task.id}`}
                     id={task.id}
                     user={task.user}
                     email={task.email}
                     description={task.description}
                     completed={task.completed}
                     edited={task.edited}
                     editing={task.id === editTaskForm.id}/>
      ))}
    </div>
  )
}

export default TaskList
