import express from 'express';

const router = express.Router();

router.post('/register', (req, res) => {
  res.send('post.register = create register');
});

router.get('/register', (req, res) => {
  res.send('get.register = get all register');
});

router.get('/register/:id', (req, res) => {
  res.send('get.register = get register by id');
});

router.put('/register', (req, res) => {
  res.send('post.register = update a register');
});

router.delete('/register', (req, res) => {
  res.send('post.register = delete a register');
});

export default router;
