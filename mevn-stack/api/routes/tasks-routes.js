import express from 'express';
import * as taskController from '../controllers/tasks-controller';

const router = express.Router();

router.post('/task', taskController.create);
router.get('/task', taskController.index);
router.get('/task/:id', taskController.show);
router.put('/task', taskController.update);
router.delete('/task', taskController.remove);

export default router;