import { config } from 'dotenv-safe'
import { DotenvParseOutput } from 'dotenv'

let env: DotenvParseOutput | typeof process.env

if (process.env.NODE_ENV === 'production') {
  env = process.env
} else if (process.env.NODE_ENV === 'development') {
  env = config({
    sample: './.env.sample'
  }).required
} else {
  throw new Error('Application is not configured properly')
}

export default {
  applicationPort: env.APPLICATION_PORT,
  cookiesDomain: env.COOKIES_DOMAIN,
  corsOrigin: env.CORS_ORIGIN,
  dbHost: env.DB_HOST,
  dbPort: Number(env.DB_PORT),
  dbName: env.DB_NAME,
  dbUser: env.DB_USER,
  dbPass: env.DB_PASS,
  jwtSecret: env.JWT_SECRET
}
