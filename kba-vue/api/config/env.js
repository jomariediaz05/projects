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
    app.use(bodyParser.json());
    app.use(morgan('dev'));
    app.use(cors());
}

function setProduction(app) {
    app.use(bodyParser.json());
    app.use(express.static(`${__dirname}/../dist`));
}