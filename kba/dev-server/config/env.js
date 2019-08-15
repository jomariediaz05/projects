/* eslint-disable import/prefer-default-export */

import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';

function setDevelopmentEnvironment(app) {
  process.env.NODE_ENV = 'development';
  app.use(bodyParser.json());
  app.use(morgan('dev'));
  app.use(cors());
}

function setProductionEnvironment(app) {
  process.env.NODE_ENV = 'production';
  app.use(bodyParser.json());
  app.use(express.static(`${__dirname}/../dist`));
}

export function setEnvironment(app) {
  if (process.env.NODE_ENV !== 'production') {
    setDevelopmentEnvironment(app);
  } else {
    setProductionEnvironment(app);
  }
}
