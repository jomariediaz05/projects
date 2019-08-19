'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _authController = require('../controllers/auth-controller');

var authController = _interopRequireWildcard(_authController);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.post('/auth', authController.index);

// router.get('/auth', (req, res) => {
//     res.send('get.auth - get all auth');
// });
// router.get('/auth/:id', (req, res) => {
//     res.send('get.auth - get auth by id');
// });
// router.put('/auth', (req, res) => {
//     res.send('put.auth - update a auth');
// });
// router.delete('/auth', (req, res) => {
//     res.send('auth.delete - delete a auth');
// });

exports.default = router;