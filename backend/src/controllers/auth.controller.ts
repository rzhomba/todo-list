import { Request, Response, NextFunction } from 'express'
import { SignInRequest } from '../types/request.types'
import { authService } from '../services/auth.service'
import Env from '../utils/env'

export const signIn = async (req: SignInRequest, res: Response, next: NextFunction): Promise<void> => {
  const login = req.body.login
  const password = req.body.password

  if (!login || !password) {
    const err = new Error('Login or password is missing.')
    res
      .status(401)
      .send({
        error: err.toString()
      })

    next(err)
    return
  }

  let token = ''
  try {
    token = await authService.auth(login, password)
  } catch (err: any) {
    res.status(401).send({
      error: err.toString()
    })
    next(err)
    return
  }

  res
    .cookie('jwt', token, {
      domain: Env.cookiesDomain,
      httpOnly: true,
      sameSite: true,
      maxAge: 86400000 // 24h
    })
    .status(200)
    .send()
}

export const signOut = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  res
    .clearCookie('jwt')
    .status(200)
    .send()

  next()
}
