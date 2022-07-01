import { NextFunction, Response } from 'express'
import {
  CreateTaskRequest,
  EditTaskRequest,
  MarkTaskRequest,
  TasksRequest,
  TasksResponse,
  SortBy, SortDir
} from '../types/request.types'
import { taskService } from '../services/task.service'

export const getTasks = async (req: TasksRequest, res: TasksResponse, next: NextFunction) => {
  const sortBy = req.query.sortBy ?? 'name' as SortBy
  const sortDir = req.query.sortDir ?? 'ascending' as SortDir

  const offset = Number(req.query.offset ?? '0')
  const limit = Number(req.query.limit ?? '3')

  const tasks = await taskService.list(sortBy, sortDir, offset, limit)

  res.status(200).send(tasks)
  next()
}

export const createTask = async (req: CreateTaskRequest, res: Response, next: NextFunction) => {
  const { user, email, description } = req.body

  await taskService.create(user, email, description)

  res.status(200).send()
  next()
}

export const markTask = async (req: MarkTaskRequest, res: Response, next: NextFunction) => {
  const taskId = Number(req.params.taskId)
  const { completed } = req.body

  await taskService.update(taskId, undefined, completed)

  res.status(200).send()
  next()
}

export const editTask = async (req: EditTaskRequest, res: Response, next: NextFunction) => {
  const taskId = Number(req.params.taskId)
  const { description } = req.body

  await taskService.update(taskId, description, undefined)

  res.status(200).send()
  next()
}
