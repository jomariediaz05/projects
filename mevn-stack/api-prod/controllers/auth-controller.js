'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.index = index;

var _stringUtil = require('../utils/string-util');

function index(req, res) {
    var validation = validateIndex(res.body);

    if (!validation.isValid) {
        return res.status(400).json({
            message: validation.message
        });
    }

    return res.status(204).json();
}

function validateIndex(body) {
    var errors = '';

    if (_stringUtil.stringUtil.isEmpty(body.username)) {
        errors += 'Username is required.';
    }

    if (_stringUtil.stringUtil.isEmpty(body.password)) {
        errors += 'Password is required.';
    }

    return {
        isValid: _stringUtil.stringUtil.isEmpty(errors),
        message: errors
    };
}