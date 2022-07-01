import express from 'express'
import { getTasks, createTask, markTask, updateDescription } from '../controllers/task.controller'
import { auth } from '../middleware/auth.middleware'

const router = express.Router()

router.route('/').get(getTasks)
router.route('/').post(createTask)
router.route('/mark/:taskId').put(auth, markTask)
router.route('/description/:taskId').put(auth, updateDescription)

export default router
