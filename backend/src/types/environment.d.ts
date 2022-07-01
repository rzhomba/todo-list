declare global {
  // eslint-disable-next-line no-unused-vars
  namespace NodeJS {
    // eslint-disable-next-line no-unused-vars
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production'
      APPLICATION_PORT: string
      COOKIES_DOMAIN: string
      DB_HOST: string
      DB_NAME: string
      DB_USER: string
      DB_PASS: string
      JWT_SECRET: string
    }
  }
}

export {}
