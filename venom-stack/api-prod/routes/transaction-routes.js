'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _transactionController = require('../controllers/transaction-controller');

var transactionController = _interopRequireWildcard(_transactionController);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.post('/transaction', transactionController.createTransaction);
router.get('/transaction/:year/:month', transactionController.getTransactionByYearAndMonth);
router.get('/transaction/balance/:year/:month', transactionController.getRunningBalanceByYearAndMonth);

exports.default = router;