'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _registerController = require('../controllers/register-controller');

var registerController = _interopRequireWildcard(_registerController);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.post('/register', registerController.index);

// router.get('/register', (req, res) => {
//     res.send('get.register - get all register');
// });
// router.get('/register/:id', (req, res) => {
//     res.send('get.register - get register by id');
// });
// router.put('/register', (req, res) => {
//     res.send('put.register - update a register');
// });
// router.delete('/register', (req, res) => {
//     res.send('register.delete - delete a register');
// });

exports.default = router;