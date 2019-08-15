import express from 'express';

const router = express.Router();

router.post('/auth', (req, res) => {
  res.send('post.auth = create auth');
});

router.get('/auth', (req, res) => {
  res.send('get.auth = get all auth');
});

router.get('/auth/:id', (req, res) => {
  res.send('get.auth = get auth by id');
});

router.put('/auth', (req, res) => {
  res.send('post.auth = update a auth');
});

router.delete('/auth', (req, res) => {
  res.send('post.auth = delete a auth');
});

export default router;
