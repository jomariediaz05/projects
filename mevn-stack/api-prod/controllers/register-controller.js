'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.index = index;

var _stringUtil = require('../utils/string-util');

var _userModel = require('../models/user-model');

var _userModel2 = _interopRequireDefault(_userModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function index(req, res) {
    var validation = validateIndex(req.body);

    if (!validation.isValid) {
        return res.status(400).json({
            message: validation.message
        });
    }

    var user = new _userModel2.default({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    });

    user.save(function (error) {
        if (error) {
            if (error.code === 11000) {
                return res.status(403).json({
                    message: 'Username is already taken'
                });
            }

            return res.status(500).json();
        }

        return res.status(201).json();
    });

    return res.status(201).json();
}

function validateIndex(body) {
    var errors = '';

    if (_stringUtil.stringUtil.isEmpty(body.username)) {
        errors += 'Username is required.';
    }

    if (_stringUtil.stringUtil.isEmpty(body.password)) {
        errors += 'Password is required.';
    }

    if (_stringUtil.stringUtil.isEmpty(body.firstName)) {
        errors += 'First name is required.';
    }

    if (_stringUtil.stringUtil.isEmpty(body.lastName)) {
        errors += 'Last name is required.';
    }
    return {
        isValid: _stringUtil.stringUtil.isEmpty(errors),
        message: errors
    };
}