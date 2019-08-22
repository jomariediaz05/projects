import express from 'express'
import * as userController from '../controllers/user-controller'

const router = express.Router()

router.get('/user', userController.getUsers)
router.get('/user/:id', userController.getUserById)
router.get('/user/email/:email', userController.getUserByEmail)
router.post('/user/', userController.createUser)
router.put('/user/:id', userController.updateUser)

export default router
