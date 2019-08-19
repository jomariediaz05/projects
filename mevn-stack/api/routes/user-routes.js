import express from 'express';
import * as userController from '../controllers/user-controller';

const router = express.Router();

router.get('/user', userController.index);

// router.get('/user', (req, res) => {
//     res.send('get.user - get all user');
// });

// router.get('/user/:id', (req, res) => {
//     res.send('get.user - get user by id');
// });
// router.put('/user', (req, res) => {
//     res.send('put.user - update a user');
// });
// router.delete('/user', (req, res) => {
//     res.send('user.delete - delete a user');
// });

export default router;