import express from 'express';
import * as controller from './user-controller';

const router = express.Router();

router.post('/user', controller.index);

router.get('/user', (req, res) => {
  res.send('get.user = get all user');
});

router.get('/user/:id', (req, res) => {
  res.send('get.user = get user by id');
});

router.put('/user', (req, res) => {
  res.send('post.user = update a user');
});

router.delete('/user', (req, res) => {
  res.send('post.user = delete a user');
});

export default router;
