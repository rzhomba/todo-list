import { taskModel } from '../models'
import Task from '../models/task.model'
import { SortBy, SortDir } from '../types/request.types'

export class TaskService {
  public list = async (sortBy: SortBy, sortDir: SortDir, offset: number, limit: number): Promise<Task[]> => {
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

    return await taskModel.findAll({
      limit,
      offset: offset * limit,
      order: [[by, dir]]
    })
  }

  public count = async (): Promise<number> => {
    return await taskModel.count()
  }

  public create = async (user: string, email: string, description: string): Promise<Task> => {
    return await taskModel.create({
      user,
      email,
      description,
      completed: false
    })
  }

  public update = async (taskId: number, description: string | undefined, completed: boolean | undefined): Promise<Task> => {
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

    return task
  }
}

export const taskService = new TaskService()
