'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userSchema = new _mongoose2.default.Schema({
    firstName: String,
    middleName: String,
    lastName: String
});

userSchema.set('timestamps', true);
userSchema.virtual('fullName').get(function () {
    return this.firstName + ' ' + this.lastName;
});
userSchema.pre('save', function (next) {
    next();
});

exports.default = _mongoose2.default.model('user', userSchema);