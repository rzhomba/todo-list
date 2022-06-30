import { config } from 'dotenv-safe'
import { DotenvParseOutput } from 'dotenv'

let env: DotenvParseOutput | typeof process.env

if (process.env.NODE_ENV === 'development') {
  env = config({
    sample: './.env.sample'
  }).required
} else if (process.env.NODE_ENV === 'production') {
  env = process.env
} else {
  throw new Error('Application is not configured properly')
}

export default {
  applicationPort: env.APPLICATION_PORT,
  cookiesDomain: env.COOKIES_DOMAIN,
  dbHost: env.DB_HOST,
  dbUser: env.DB_USER,
  dbPass: env.DB_PASS
}
