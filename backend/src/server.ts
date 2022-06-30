import express from 'express'
import env from './utils/env'
import models from './models'

await models.init()

const app = express()
const port = env.applicationPort

app.listen(port, () => {
  console.log(`Listening on :${port}`)
})
