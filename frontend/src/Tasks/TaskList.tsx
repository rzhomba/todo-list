import React, { useEffect, useState } from 'react'
import TaskElement from './TaskElement'
import { Task } from '../types/task'
import './TaskList.css'

const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    const data = [{
      id: '1',
      user: 'test',
      email: 'test@test.com',
      description: 'sample task',
      completed: false
    }, {
      id: '2',
      user: 'test',
      email: 'test@test.com',
      description: 'sample task 2',
      completed: false
    }, {
      id: '3',
      user: 'test',
      email: 'test@test.com',
      description: 'sample task 3',
      completed: true
    }, {
      id: '4',
      user: 'test',
      email: 'test@test.com',
      description: 'sample task 4',
      completed: false
    }]

    setTasks(data)

    return () => setTasks([])
  }, [])

  return (
    <div className="tasks-list">
      {tasks.map(task => (
        <TaskElement key={`task-${task.id}`}
                     id={task.id}
                     user={task.user}
                     email={task.email}
                     description={task.description}
                     completed={task.completed}/>
      ))}
    </div>
  )
}

export default TaskList
