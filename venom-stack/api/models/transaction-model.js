import mongoose from 'mongoose'

const transactionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'user'
  },
  transactionDate: {
    type: Date,
    required: true
  },
  transactionType: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  charge: {
    type: Number,
    default: 0
  },
  deposit: {
    type: Number,
    default: 0
  },
  notes: {
    type: String,
    default: ''
  }
})

transactionSchema.set('timestamps', true)

export default mongoose.model('transaction', transactionSchema)
