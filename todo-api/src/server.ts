import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import models from './models'
import routes from './routes'
import Env from './utils/env'

await models.init()

const app = express()
const port = Env.applicationPort

app.use(express.json())
app.use(cors({
  origin: Env.corsOrigin,
  allowedHeaders: ['Content-Type'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
  optionsSuccessStatus: 200
}))
app.use(cookieParser())
app.use(routes)

app.listen(port, () => {
  console.log(`Listening on :${port}`)
})
