import { NextFunction } from 'express'
import { AuthRequest, AuthResponse } from '../types/request.types'
import { authService } from '../services/auth.service'
import Env from '../utils/env'

export const signIn = async (req: AuthRequest, res: AuthResponse, next: NextFunction): Promise<void> => {
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
