'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTransactionByYearAndMonth = getTransactionByYearAndMonth;
exports.getRunningBalanceByYearAndMonth = getRunningBalanceByYearAndMonth;
exports.createTransaction = createTransaction;

var _transactionController = require('./transaction-controller');

var _transactionController2 = _interopRequireDefault(_transactionController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getTransactionByYearAndMonth(req, res) {
  //   const startDate = moment([req.params.year, req.params.month - 1])
  //   const endDate = moment(startDate).endOf('month')
  var year = req.params.year;
  var month = req.params.month - 1;

  _transactionController2.default.find({
    id: req.get('userId'),
    transactionDate: {
      $gte: new Date(Date.UTC(year, month, 1, 0, 0, 0, 0)),
      $le: new Date(Date.UTC(year, month + 1, 1, 0, 0, 0, 0))
    }
  }).sort({
    'transactionDate': 1
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
  var year = req.params.year;
  var month = req.params.month - 1;
  var endDate = new Date(Date.UTC(year, month, 1));

  _transactionController2.default.aggregate([{
    $match: {
      userId: req.get('userId'),
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
  }]).exec().then(function (transaction) {
    if (!transaction) {
      return res.status(400).json();
    }

    return res.status(200).json(transaction);
  }).catch(function (error) {
    return res.status(500).json(error);
  });
}

function createTransaction(req, res) {
  var transaction = new _transactionController2.default(req.body.transaction);

  transaction.save(function (error, transaction) {
    if (error) {
      return res.status(500).json(error);
    }

    return res.status(201).json(transaction);
  });
}