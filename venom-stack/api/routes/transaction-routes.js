import express from 'express'
import * as transactionController from '../controllers/transaction-controller'

const router = express.Router()

router.post('/transaction', transactionController.createTransaction)
router.post('/transaction/:year/:month', transactionController.getTransactionByYearAndMonth)
router.post('/transaction/balance/:year/:month', transactionController.getRunningBalanceByYearAndMonth)

export default router
