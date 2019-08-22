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

router.get('/user', userController.getUsers);
router.get('/user/:id', userController.getUserById);
router.get('/user/email/:email', userController.getUserByEmail);
router.post('/user/', userController.createUser);
router.put('/user/:id', userController.updateUser);

exports.default = router;