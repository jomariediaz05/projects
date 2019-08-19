import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';

export function setEnvironment(app) {
    if (process.env.NODE_ENV !== 'production') {
        setDevelopmentEnvironment(app);
    } else {
        setProductionEnvironment(app);
    }
}

function setDevelopmentEnvironment(app) {
    process.env.NODE_ENV = 'development';
    process.env.DB_URL = 'mongodb://localhost:27017/vue-db'

    app.use(bodyParser.json());
    app.use(morgan('dev'));
    app.use(cors());
}

function setProductionEnvironment(app) {
    process.env.NODE_ENV = 'production';
    process.env.DB_URL = 'mongodb://localhost:27017/prod-db'

    app.use(bodyParser.json());
    app.use(express.static(`${__dirname}/../dist`));
}