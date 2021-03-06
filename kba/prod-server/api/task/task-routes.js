'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.post('/task', function (req, res) {
  res.send('post.task = create task');
});

router.get('/task', function (req, res) {
  res.send('get.task = get all task');
});

router.get('/task/:id', function (req, res) {
  res.send('get.task = get task by id');
});

router.put('/task', function (req, res) {
  res.send('post.task = update a task');
});

router.delete('/task', function (req, res) {
  res.send('post.task = delete a task');
});

exports.default = router;