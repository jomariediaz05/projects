'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.registeredRoutes = registeredRoutes;

var _tasksRoutes = require('./tasks-routes');

var _tasksRoutes2 = _interopRequireDefault(_tasksRoutes);

var _authRoutes = require('./auth-routes');

var _authRoutes2 = _interopRequireDefault(_authRoutes);

var _registerRoutes = require('./register-routes');

var _registerRoutes2 = _interopRequireDefault(_registerRoutes);

var _userRoutes = require('./user-routes');

var _userRoutes2 = _interopRequireDefault(_userRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var urlEndPoint = '/api';

function registeredRoutes(app) {
    app.use(urlEndPoint, _tasksRoutes2.default);
    app.use(urlEndPoint, _authRoutes2.default);
    app.use(urlEndPoint, _registerRoutes2.default);
    app.use(urlEndPoint, _userRoutes2.default);
}