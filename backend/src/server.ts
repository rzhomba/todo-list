import express from 'express'
import env from './utils/env'

const app = express()
const port = env.applicationPort

app.listen(port, () => {
  console.log(`Listening on :${port}`)
})
