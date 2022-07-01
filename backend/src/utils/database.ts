import { Sequelize } from 'sequelize'
import Env from './env'

const sequelize = new Sequelize({
  host: Env.dbHost,
  port: 5432,
  database: Env.dbName,
  username: Env.dbUser,
  password: Env.dbPass,
  dialect: 'postgres'
})

await sequelize.authenticate()
console.log('Connection to the database has been established successfully.')

export default sequelize
