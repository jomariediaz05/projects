'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.post('/auth', function (req, res) {
  res.send('post.auth = create auth');
});

router.get('/auth', function (req, res) {
  res.send('get.auth = get all auth');
});

router.get('/auth/:id', function (req, res) {
  res.send('get.auth = get auth by id');
});

router.put('/auth', function (req, res) {
  res.send('post.auth = update a auth');
});

router.delete('/auth', function (req, res) {
  res.send('post.auth = delete a auth');
});

exports.default = router;