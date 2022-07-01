import { Request, Response } from 'express'
import { Error } from 'sequelize'
import Task from '../models/task.model'

interface BaseData {
  error?: Error
}

interface BaseResponse<ResBody> extends Response<ResBody | BaseData> {
}

interface AuthData {
  token: string
}

export interface AuthRequest extends Request {
  body: {
    login: string
    password: string
  }
}

export interface AuthResponse extends BaseResponse<AuthData> {}

interface TasksData {
  tasks: Task[]
  total: number
}

export type SortBy = 'user' | 'email' | 'status'
export type SortDir = 'ascending' | 'descending'

export interface TasksRequest extends Request {
  query: {
    sortBy?: SortBy
    sortDir?: SortDir
    offset?: string
    limit?: string
  }
}

export interface TasksResponse extends BaseResponse<TasksData> {}

export interface CreateTaskRequest extends Request {
  body: {
    user: string
    email: string
    description: string
  }
}

export interface MarkTaskRequest extends Request {
  query: {
    taskId: string
  }
  body: {
    completed: boolean
  }
}

export interface EditTaskRequest extends Request {
  query: {
    taskId: string
  }
  body: {
    description: string
  }
}
