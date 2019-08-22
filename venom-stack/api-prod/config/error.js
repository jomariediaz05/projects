'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.errorConfig = errorConfig;
function errorConfig(app) {
  app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;

    next(err);
  });

  // app.use((err, req, res, next) => {
  //   res.locals.message = err.message
  //   res.locals.error = process.env.NODE_ENV !== 'production' ? {} : err

  //   res.status(err.status || 500)
  //   res.render('error')
  // })
}