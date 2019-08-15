'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.post('/register', function (req, res) {
  res.send('post.register = create register');
});

router.get('/register', function (req, res) {
  res.send('get.register = get all register');
});

router.get('/register/:id', function (req, res) {
  res.send('get.register = get register by id');
});

router.put('/register', function (req, res) {
  res.send('post.register = update a register');
});

router.delete('/register', function (req, res) {
  res.send('post.register = delete a register');
});

exports.default = router;