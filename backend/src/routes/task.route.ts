import express from 'express'
import { getTasks, createTask, markTask, editTask } from '../controllers/task.controller'
import { auth } from '../middleware/auth.middleware'

const router = express.Router()

router.route('/').get(getTasks)
router.route('/').post(createTask)
router.route('/mark/:taskId').put(auth, markTask)
router.route('/edit/:taskId').put(auth, editTask)

export default router
