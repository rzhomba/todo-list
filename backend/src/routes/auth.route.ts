import express from 'express'
import { signIn } from '../controllers/auth.controller'
import { auth } from '../middleware/auth.middleware'

const router = express.Router()

router.route('/').post(signIn)
router.route('/').delete(auth, signIn)

export default router
