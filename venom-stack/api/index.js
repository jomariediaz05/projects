import express from 'express'
import {
  setEnvironment
} from './config/env'
import {
  connectToDb
} from './config/db'
import {
  registeredRoutes
} from './routes/router'
import {
  errorConfig
} from './config/error'

const app = express()
const port = 7596

setEnvironment(app)
connectToDb()
registeredRoutes(app)

app.set('port', port)

app.get('/', (req, res) => {
  if (process.env.NODE_ENV !== 'production') {
    return res.send(`Running on ${process.env.NODE_ENV} server`)
  } else {
    return res.sendFile('index.html', {
      root: `${__dirname}/../dist/`
    })
  }
})

errorConfig(app)

app.listen(app.get('port'), () => console.log(`App is listening on port ${port} in ${process.env.NODE_ENV} server`))
