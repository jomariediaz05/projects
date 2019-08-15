'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _userController = require('./user-controller');

var controller = _interopRequireWildcard(_userController);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.post('/user', controller.index);

router.get('/user', function (req, res) {
  res.send('get.user = get all user');
});

router.get('/user/:id', function (req, res) {
  res.send('get.user = get user by id');
});

router.put('/user', function (req, res) {
  res.send('post.user = update a user');
});

router.delete('/user', function (req, res) {
  res.send('post.user = delete a user');
});

exports.default = router;