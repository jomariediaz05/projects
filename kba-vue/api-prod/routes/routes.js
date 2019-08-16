'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.registeredRoutes = registeredRoutes;

var _userRoutes = require('./user-routes');

var _userRoutes2 = _interopRequireDefault(_userRoutes);

var _authRoutes = require('./auth-routes');

var _authRoutes2 = _interopRequireDefault(_authRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function registeredRoutes(app) {
    app.use('/api', _userRoutes2.default);
    app.use('/api', _authRoutes2.default);
}