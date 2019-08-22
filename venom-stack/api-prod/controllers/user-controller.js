'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUsers = getUsers;
exports.getUserById = getUserById;
exports.getUserByEmail = getUserByEmail;
exports.createUser = createUser;
exports.updateUser = updateUser;

var _userModel = require('../models/user-model');

var _userModel2 = _interopRequireDefault(_userModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getUsers(req, res) {
  return res.status(200).json({
    message: 'User Controller'
  });
}

function getUserById(req, res) {
  _userModel2.default.findById({
    id: req.params.id
  }).exec().then(function (user) {
    if (!user) {
      return res.status(404).json();
    }

    return res.status(200).json({
      user: user
    });
  }).catch(function (error) {
    return res.status(500).json(error);
  });
}

function getUserByEmail(req, res) {
  _userModel2.default.find({
    email: req.params.email
  }).exec().then(function (user) {
    if (!user) {
      return res.status(404).json();
    }

    return res.status(200).json({
      user: user
    });
  }).catch(function (error) {
    return res.status(500).json(error);
  });
}

function createUser(req, res) {
  var user = getUserModel(req.body.user);

  user.save(function (error) {
    if (error) {
      return res.status(500).json(error);
    }

    return res.status(201).json(user);
  });
}

function updateUser(req, res) {
  var user = getUserModel(req.body.user);

  _userModel2.default.findByIdAndUpdate({
    id: req.params.id
  }, user, function (error) {
    if (error) {
      return res.status(500).json(error);
    }

    return res.status(204).json(user);
  });
}

function getUserModel(user) {
  return new _userModel2.default(user);
}