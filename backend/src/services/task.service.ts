import { taskModel } from '../models'
import Task from '../models/task.model'
import { SortBy, SortDir } from '../types/request.types'

interface TasksData {
  tasks: Task[]
  total: number
}

export class TaskService {
  public list = async (sortBy: SortBy, sortDir: SortDir, offset: number, limit: number): Promise<TasksData> => {
    let by = 'user'
    if (sortBy === 'user') {
      by = 'user'
    } else if (sortBy === 'email') {
      by = 'email'
    } else if (sortBy === 'status') {
      by = 'completed'
    }
    let dir = 'ASC'
    if (sortDir === 'ascending') {
      dir = 'ASC'
    } else if (sortDir === 'descending') {
      dir = 'DESC'
    }

    const tasks = await taskModel.findAll({
      limit,
      offset: offset * limit,
      order: [[by, dir]]
    })
    const total = await taskModel.count()

    return {
      tasks,
      total
    }
  }

  public create = async (user: string, email: string, description: string): Promise<void> => {
    await taskModel.create({
      user,
      email,
      description,
      completed: false
    })
  }

  public update = async (taskId: number, description: string | undefined, completed: boolean | undefined): Promise<void> => {
    const task = await taskModel.findByPk(taskId)
    if (!task) {
      throw new Error(`Task #${taskId} not found.`)
    }

    if (description) {
      task.description = description
    }

    if (completed) {
      task.completed = completed
    }

    await task.save()
  }
}

export const taskService = new TaskService()
