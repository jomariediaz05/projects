import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import bodyParser from 'body-parser'

export function setEnvironment(app) {
    if (process.env.NODE_ENV !== 'production') {
        setDevelopment(app);
    } else {
        setProduction(app);
    }
}

function setDevelopment(app) {
    process.env.NODE_ENV = 'development';
    process.env.DB_URL = 'mongodb://localhost:27017/vue-db';
    app.use(bodyParser.json());
    app.use(morgan('dev'));
    app.use(cors());
}

function setProduction(app) {
    process.env.DB_URL = 'mongodb://localhost:27017/prod-db';
    app.use(bodyParser.json());
    app.use(express.static(`${__dirname}/../dist`));
}