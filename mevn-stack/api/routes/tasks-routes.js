import express from 'express';
import * as taskController from '../controllers/tasks-controller';
import * as authService from '../services/auth-service';

const router = express.Router();

router.post('/task', authService.requireLogin, taskController.create);
router.get('/task', authService.requireLogin, taskController.index);
router.get('/task/:id', authService.requireLogin, taskController.show);
router.put('/task', authService.requireLogin, taskController.update);
router.delete('/task/:id', authService.requireLogin, taskController.remove);

export default router;