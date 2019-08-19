'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _stringUtil = require('../utils/string-util');

var _bcryptNodejs = require('bcrypt-nodejs');

var _bcryptNodejs2 = _interopRequireDefault(_bcryptNodejs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userSchema = new _mongoose2.default.Schema({
    username: String,
    firstName: String,
    lastName: String,
    password: String
});

userSchema.set('timestamps', true);

userSchema.virtual('fullname').get(function () {
    var firstName = _stringUtil.stringUtil.capitalize(this.firstName.toLowerCase());
    var lastName = _stringUtil.stringUtil.capitalize(this.lastName.toLowerCase());

    return firstName + ' ' + lastName;
});

userSchema.statics.passwordMatch = function (password, hash) {
    return _bcryptNodejs2.default.compareSync(password, hash);
};

userSchema.pre('save', function (next) {
    this.username = this.username.toLowerCase();
    this.firstName = this.firstName.toLowerCase();
    this.lastName = this.lastName.toLowerCase();

    var unsafePassword = this.password;
    this.password = _bcryptNodejs2.default.hashSync(unsafePassword);

    next();
});

exports.default = _mongoose2.default.model('user', userSchema);