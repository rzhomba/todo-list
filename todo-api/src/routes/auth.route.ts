import express from 'express'
import { signIn, signOut } from '../controllers/auth.controller'
import { auth } from '../middleware/auth.middleware'

const router = express.Router()

router.route('/').post(signIn)
router.route('/').delete(auth, signOut)

export default router
