import express from 'express'
import controller from '../controllers/auth.js'

const router = express.Router()

router.get('/', controller.renderAbout);

export default router
