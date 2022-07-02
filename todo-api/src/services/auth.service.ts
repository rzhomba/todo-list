import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { adminModel } from '../models'
import Env from '../utils/env'

class AuthService {
  public auth = async (login: string, password: string): Promise<string> => {
    const user = await adminModel.findOne({
      where: { login },
      attributes: ['login', 'password']
    })

    if (!user) {
      throw new Error(`User ${login} not found or specified password is incorrect.`)
    }

    const check = await bcrypt.compare(password, user.password)

    if (!check) {
      throw new Error(`User ${login} not found or specified password is incorrect.`)
    }

    return jwt.sign({
      login: user.login,
      iat: Date.now()
    }, Env.jwtSecret!, { expiresIn: '24h' })
  }

  public exists = async (login: string): Promise<boolean> => {
    return await adminModel
      .count({ where: { login } })
      .then(count => count > 0)
  }
}

export const authService = new AuthService()
