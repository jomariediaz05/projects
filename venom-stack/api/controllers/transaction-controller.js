import mongoose from 'mongoose'
import TransactionModel from '../models/transaction-model'

export function getTransactionByYearAndMonth (req, res) {
  const year = req.params.year
  const month = req.params.month - 1
  const startDate = new Date(Date.UTC(year, month, 1, 0, 0, 0, 0))
  const endDate = new Date(Date.UTC(year, month + 1, 1, 0, 0, 0, 0))

  TransactionModel.find({
    id: req.get('userId'),
    transactionDate: {
      $gte: startDate,
      $lt: endDate
    }
  }).sort({
    transactionDate: 1
  }).exec()
    .then(transaction => {
      if (!transaction) {
        return res.status(400).json()
      }

      return res.status(200).json(transaction)
    })
    .catch(error => {
      return res.status(500).json(error)
    })
}

export function getRunningBalanceByYearAndMonth (req, res) {
  const userId = req.get('userId')
  const year = req.params.year
  const month = req.params.month - 1
  const endDate = new Date(Date.UTC(year, month, 1))

  const pipeLine = [{
    $match: {
      userId: mongoose.Types.ObjectId(userId)
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
  }]

  TransactionModel.aggregate(pipeLine).exec()
    .then(transaction => {
      if (!transaction) {
        return res.status(400).json()
      }

      return res.status(200).json(transaction)
    }).catch(error => {
      return res.status(500).json(error)
    })
}

export function createTransaction (req, res) {
  const transaction = new TransactionModel(req.body.transaction)

  transaction.save((error, transaction) => {
    if (error) {
      return res.status(500).json(error)
    }

    return res.status(201).json(transaction)
  })
}
