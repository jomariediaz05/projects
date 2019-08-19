'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _userController = require('../controllers/user-controller');

var userController = _interopRequireWildcard(_userController);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

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

exports.default = router;