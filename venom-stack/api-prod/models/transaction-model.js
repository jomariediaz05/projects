'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var transactionSchema = new _mongoose2.default.Schema({
  userId: {
    type: _mongoose2.default.SchemaTypes.ObjectId,
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
});

transactionSchema.set('timestamps', true);

exports.default = _mongoose2.default.model('transaction', transactionSchema);