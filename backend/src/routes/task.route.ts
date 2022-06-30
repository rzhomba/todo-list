import express from 'express'
import { getTasks, createTask, markTask, updateDescription } from '../controllers/task.controller'

const router = express.Router()

router.route('/').get(getTasks)
router.route('/').post(createTask)
router.route('/mark/:taskId').put(markTask)
router.route('/description/:taskId').put(updateDescription)

export default router
