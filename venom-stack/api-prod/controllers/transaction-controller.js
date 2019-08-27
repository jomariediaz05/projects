'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTransactionByYearAndMonth = getTransactionByYearAndMonth;
exports.getRunningBalanceByYearAndMonth = getRunningBalanceByYearAndMonth;
exports.createTransaction = createTransaction;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _transactionModel = require('../models/transaction-model');

var _transactionModel2 = _interopRequireDefault(_transactionModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getTransactionByYearAndMonth(req, res) {
  var year = req.params.year;
  var month = req.params.month - 1;
  var startDate = new Date(Date.UTC(year, month, 1, 0, 0, 0, 0));
  var endDate = new Date(Date.UTC(year, month + 1, 1, 0, 0, 0, 0));

  _transactionModel2.default.find({
    id: req.get('userId'),
    transactionDate: {
      $gte: startDate,
      $lt: endDate
    }
  }).sort({
    transactionDate: 1
  }).exec().then(function (transaction) {
    if (!transaction) {
      return res.status(400).json();
    }

    return res.status(200).json(transaction);
  }).catch(function (error) {
    return res.status(500).json(error);
  });
}

function getRunningBalanceByYearAndMonth(req, res) {
  var userId = req.get('userId');
  var year = req.params.year;
  var month = req.params.month - 1;
  var endDate = new Date(Date.UTC(year, month, 1));

  var pipeLine = [{
    $match: {
      userId: _mongoose2.default.Types.ObjectId(userId)
    }
  }, {
    $match: {
      transactionDate: {
        $lt: endDate
      }
    }
  }, {
    $group: {
      _id: null,
      charges: {
        $sum: '$charge'
      },
      deposits: {
        $sum: '$deposit'
      }
    }
  }];

  _transactionModel2.default.aggregate(pipeLine).exec().then(function (transaction) {
    if (!transaction) {
      return res.status(400).json();
    }

    return res.status(200).json(transaction);
  }).catch(function (error) {
    return res.status(500).json(error);
  });
}

function createTransaction(req, res) {
  var transaction = new _transactionModel2.default(req.body.transaction);

  transaction.save(function (error, transaction) {
    if (error) {
      return res.status(500).json(error);
    }

    return res.status(201).json(transaction);
  });
}