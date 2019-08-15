'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registeredRoutes = registeredRoutes;

var _taskRoutes = require('./api/task/task-routes');

var _taskRoutes2 = _interopRequireDefault(_taskRoutes);

var _authRoutes = require('./api/auth/auth-routes');

var _authRoutes2 = _interopRequireDefault(_authRoutes);

var _registerRoutes = require('./api/register/register-routes');

var _registerRoutes2 = _interopRequireDefault(_registerRoutes);

var _userRoutes = require('./api/user/user-routes');

var _userRoutes2 = _interopRequireDefault(_userRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable import/prefer-default-export */

function registeredRoutes(app) {
  app.use('/api', _taskRoutes2.default);
  app.use('/api', _authRoutes2.default);
  app.use('/api', _registerRoutes2.default);
  app.use('/api', _userRoutes2.default);
}