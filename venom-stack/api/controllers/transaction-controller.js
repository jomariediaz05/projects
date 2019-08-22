import TransactionModel from './transaction-controller'

export function getTransactionByYearAndMonth (req, res) {
  //   const startDate = moment([req.params.year, req.params.month - 1])
  //   const endDate = moment(startDate).endOf('month')
  const year = req.params.year
  const month = req.params.month - 1

  TransactionModel.find({
    id: req.get('userId'),
    transactionDate: {
      $gte: new Date(Date.UTC(year, month, 1, 0, 0, 0, 0)),
      $le: new Date(Date.UTC(year, month + 1, 1, 0, 0, 0, 0))
    }
  }).sort({
    'transactionDate': 1
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
  const year = req.params.year
  const month = req.params.month - 1
  const endDate = new Date(Date.UTC(year, month, 1))

  TransactionModel.aggregate([{
    $match: {
      userId: req.get('userId'),
      transactionDate: {
        $lt: endDate
      }
    }
  },
  {
    $group: {
      _id: null,
      charges: {
        $sum: '$charge'
      },
      deposits: {
        $sum: '$deposit'
      }
    }
  }
  ]).exec()
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
