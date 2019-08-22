import express from 'express'
import {
  setEnvironment
} from './config/env'
import {
  connectToDb
} from './config/db'

const app = express()
const port = 7596

setEnvironment(app)
connectToDb()

app.get('/', (req, res) => {
  if (process.env.NODE_ENV !== 'production') {
    return res.send(`Running on ${process.env.NODE_ENV} server`)
  } else {
    return res.sendFile('index.html', {
      root: `${__dirname}/../dist/`
    })
  }
})

app.listen(port, () => console.log(`App is listening on port ${port} in ${process.env.NODE_ENV} server`))
