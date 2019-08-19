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

    app.use(bodyParser.json());
    app.use(morgan('dev'));
    app.use(cors());
}

function setProductionEnvironment(app) {
    process.env.NODE_ENV = 'production';

    app.use(bodyParser.json());
    app.use(express.static(`${__dirname}/../dist`));
}