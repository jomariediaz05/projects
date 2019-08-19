import express from 'express';
import * as authController from '../controllers/auth-controller';

const router = express.Router();

router.post('/auth', authController.index);

// router.get('/auth', (req, res) => {
//     res.send('get.auth - get all auth');
// });
// router.get('/auth/:id', (req, res) => {
//     res.send('get.auth - get auth by id');
// });
// router.put('/auth', (req, res) => {
//     res.send('put.auth - update a auth');
// });
// router.delete('/auth', (req, res) => {
//     res.send('auth.delete - delete a auth');
// });

export default router;