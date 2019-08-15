import express from 'express'
import * as userController from '../controllers/user-controller'

const router = express.Router();

router.get('/user', userController.index);

export default router;