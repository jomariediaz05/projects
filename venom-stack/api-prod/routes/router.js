'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registeredRoutes = registeredRoutes;

var _userRoutes = require('./user-routes');

var _userRoutes2 = _interopRequireDefault(_userRoutes);

var _transactionRoutes = require('./transaction-routes');

var _transactionRoutes2 = _interopRequireDefault(_transactionRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var endPoint = '/api';

function registeredRoutes(app) {
  app.use(endPoint, _userRoutes2.default);
  app.use(endPoint, _transactionRoutes2.default);
}