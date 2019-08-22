'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.connectToDb = connectToDb;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function connectToDb() {
    _mongoose2.default.connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useFindAndModify: false
    }, function (error) {
        if (error) {
            console.log(error);
            throw error;
        } else {
            console.log('Connected to MongoDB!');
        }
    });
}