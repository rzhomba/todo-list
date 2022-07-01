import { Request, Response, NextFunction } from 'express'
import { SignInRequest } from '../types/request.types'
import { authService } from '../services/auth.service'
import Env from '../utils/env'

export const signIn = async (req: SignInRequest, res: Response, next: NextFunction): Promise<void> => {
  const login = req.body.login
  const password = req.body.password

  let token = ''
  try {
    token = await authService.auth(login, password)
  } catch (err: any) {
    res.status(400).send({
      error: err.toString()
    })
    next(err)
    return
  }

  res.cookie('jwt', token, {
    domain: Env.cookiesDomain,
    httpOnly: true,
    sameSite: true,
    maxAge: 86400000 // 24h
  })
    .status(200)
    .send()
}

export const signOut = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  res.clearCookie('jwt', {
    domain: Env.cookiesDomain,
    httpOnly: true,
    sameSite: true
  })
    .status(200)
    .send()

  next()
}
