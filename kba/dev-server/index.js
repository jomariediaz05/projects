import express from 'express';
import {
  registeredRoutes,
} from './routes';
import {
  setEnvironment,
} from './config/env';

const app = express();
const port = 3000;

setEnvironment(app);
registeredRoutes(app);

app.get('/', (req, res) => {
  if (process.env.NODE_ENV !== 'production') {
    return res.send('Running Server in Development mode');
  }
  return res.sendFile('index.html', {
    root: `${__dirname}/../dist/`,
  });
});

app.listen(port, () => console.log(`MEVN app listening on port ${port}! in ${process.env.NODE_ENV}`));
