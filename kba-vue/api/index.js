import express from 'express';
import {
    setEnvironment
} from './config/env'
import {
    registeredRoutes
} from './routes/routes'

const app = express();
const port = 7596;

setEnvironment(app);
registeredRoutes(app);

app.get('/', (req, res) => {
    if (process.env.NODE_ENV !== 'production') {
        return res.send(`Server is currently running on ${process.env.NODE_ENV}`);
    } else {
        return res.sendFile('index.js', {
            root: `${__dirname}/dist/`
        });
    }
});

app.listen(port, () => console.log(`KBA-VUE app listening on port ${port} in a ${process.env.NODE_ENV} server`))