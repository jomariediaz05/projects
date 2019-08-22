'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _env = require('./config/env');

var _db = require('./config/db');

var _router = require('./routes/router');

var _error = require('./config/error');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = 7596;

(0, _env.setEnvironment)(app);
(0, _db.connectToDb)();
(0, _router.registeredRoutes)(app);

app.set('port', port);

app.get('/', function (req, res) {
  if (process.env.NODE_ENV !== 'production') {
    return res.send('Running on ' + process.env.NODE_ENV + ' server');
  } else {
    return res.sendFile('index.html', {
      root: __dirname + '/../dist/'
    });
  }
});

(0, _error.errorConfig)(app);

app.listen(app.get('port'), function () {
  return console.log('App is listening on port ' + port + ' in ' + process.env.NODE_ENV + ' server');
});