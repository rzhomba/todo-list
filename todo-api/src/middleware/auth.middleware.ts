import { Request, Response, NextFunction } from 'express'
import jwt, { JwtPayload } from 'jsonwebtoken'
import Env from '../utils/env'
import { authService } from '../services/auth.service'

export const auth = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const token = req.cookies.jwt as string | undefined
  if (!token) {
    res.status(401).send()
    return
  }

  let decoded: JwtPayload
  try {
    decoded = jwt.verify(token, Env.jwtSecret!) as JwtPayload
  } catch {
    res.status(401).send()
    return
  }

  const payloadLogin = decoded.login as string | undefined
  if (!payloadLogin) {
    res.status(401).send()
    return
  }

  const check = await authService.exists(payloadLogin)
  if (!check) {
    res.status(401).send()
    return
  }

  next()
}
