import express from 'express'
import { Sequelize } from 'sequelize'
import env from './utils/env'

const sequelize = new Sequelize({
  host: env.dbHost,
  port: 5432,
  database: env.dbName,
  username: env.dbUser,
  password: env.dbPass,
  dialect: 'postgres'
})

await sequelize.authenticate()
console.log('Connection to the database has been established successfully.')

const app = express()
const port = env.applicationPort

app.listen(port, () => {
  console.log(`Listening on :${port}`)
})
