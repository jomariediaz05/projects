export function errorConfig (app) {
  app.use((req, res, next) => {
    const err = new Error('Not Found')
    err.status = 404

    next(err)
  })

  // app.use((err, req, res, next) => {
  //   res.locals.message = err.message
  //   res.locals.error = process.env.NODE_ENV !== 'production' ? {} : err

  //   res.status(err.status || 500)
  //   res.render('error')
  // })
}
