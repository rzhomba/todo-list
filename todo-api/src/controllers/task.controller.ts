import { NextFunction, Response } from 'express'
import {
  CreateTaskRequest,
  EditTaskRequest,
  MarkTaskRequest,
  TasksRequest,
  TaskListResponse,
  SortBy, SortDir, TaskResponse
} from '../types/request.types'
import { taskService } from '../services/task.service'
import EmailValidator from 'email-validator'

export const getTasks = async (req: TasksRequest, res: TaskListResponse, next: NextFunction) => {
  const sortBy = req.query.sortBy ?? 'name' as SortBy
  const sortDir = req.query.sortDir ?? 'ascending' as SortDir

  const offset = Number(req.query.offset ?? '0')
  const limit = Number(req.query.limit ?? '3')

  const tasks = await taskService.list(sortBy, sortDir, offset, limit)
  const total = await taskService.count()

  res.status(200).send({
    tasks,
    total
  })
  next()
}

export const createTask = async (req: CreateTaskRequest, res: TaskResponse, next: NextFunction) => {
  const { user, email, description } = req.body

  if (user.length === 0 || email.length === 0 || description.length === 0) {
    const err = new Error('Task fields cannot be empty.')
    res.status(400).send({ error: err })
    next(err)
    return
  } else if (!EmailValidator.validate(email)) {
    const err = new Error('Specify valid email address.')
    res.status(400).send({ error: err })
    next(err)
    return
  }

  const task = await taskService.create(user, email, description)
  const total = await taskService.count()

  res.status(200).send({
    task,
    total
  })
  next()
}

export const markTask = async (req: MarkTaskRequest, res: Response, next: NextFunction) => {
  const taskId = Number(req.params.taskId)

  await taskService.update(taskId, undefined, true)

  res.status(200).send()
  next()
}

export const editTask = async (req: EditTaskRequest, res: Response, next: NextFunction) => {
  const taskId = Number(req.params.taskId)
  const { description } = req.body

  if (description.length === 0) {
    const err = new Error('Description cannot be empty.')
    res.status(400).send({ error: err })
    next(err)
    return
  }

  await taskService.update(taskId, description, undefined)

  res.status(200).send()
  next()
}
