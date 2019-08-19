import express from 'express';
import {
    registeredRoutes
} from './routes/routes';
import {
    setEnvironment
} from './config/env';
import {
    connectToDb
} from './config/db';

const app = express();

setEnvironment(app);
connectToDb();
registeredRoutes(app);

app.get('/', (req, res) => {
    if (process.env.NODE_ENV !== 'production') {
        return res.send(`Running server in ${process.env.NODE_ENV} mode`);
    } else {
        return res.sendFile('index.html', {
            root: `${__dirname}/../dist/`
        });
    }
});

app.listen(3000, () => console.log(`MEVN app listening on port 3000! in ${process.env.NODE_ENV} mode!`));