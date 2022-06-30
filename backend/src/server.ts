import express from 'express'
import cors from 'cors'
import models from './models'
import routes from './routes'
import env from './utils/env'

await models.init()

const app = express()
const port = env.applicationPort

app.use(express.json())
app.use(cors({
  origin: 'localhost',
  credentials: true,
  optionsSuccessStatus: 200
}))
app.use(routes)

app.listen(port, () => {
  console.log(`Listening on :${port}`)
})
