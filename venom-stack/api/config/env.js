import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import bodyParser from 'body-parser'

export function setEnvironment (app) {
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({
    extended: false
  }))

  if (process.env.NODE_ENV !== 'production') {
    setDevelopmentEnvironment(app)
  } else {
    setProductionEnvironment(app)
  }
}

function setDevelopmentEnvironment (app) {
  process.env.NODE_ENV = 'development'
  process.env.DB_URL = 'mongodb://localhost:27017/venom-dev-db'

  app.use(cors())
  app.use(morgan('dev'))
}

function setProductionEnvironment (app) {
  process.env.NODE_ENV = 'production'
  process.env.DB_URL = 'mongodb://localhost:27017/venom-prod-db'
  // process.env.DB_URL = 'mongodb+srv://venom:p@ssw0rd@personal-zaidm.mongodb.net/test?retryWrites=true&w=majority'

  app.use(express.static(`${__dirname}/../dist`))
}
