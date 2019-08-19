import express from 'express';
import * as registerController from '../controllers/register-controller';

const router = express.Router();

router.post('/register', registerController.index);

// router.get('/register', (req, res) => {
//     res.send('get.register - get all register');
// });
// router.get('/register/:id', (req, res) => {
//     res.send('get.register - get register by id');
// });
// router.put('/register', (req, res) => {
//     res.send('put.register - update a register');
// });
// router.delete('/register', (req, res) => {
//     res.send('register.delete - delete a register');
// });

export default router;