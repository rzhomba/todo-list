import { Request, Response } from 'express'
import { Error } from 'sequelize'

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

export interface AuthResponse extends BaseResponse<AuthData> {
}
