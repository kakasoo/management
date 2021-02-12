import express, { Request, NextFunction, Response } from 'express';
import routers from './routers';
import passport from 'passport';
import passportInit from './passport';
import dotenv from 'dotenv';

import { expressMiddleware, thirdPartyMiddleware } from './middlewares';

dotenv.config();

const app: express.Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(passport.initialize());

app.use(expressMiddleware);
app.use(thirdPartyMiddleware);

passportInit();

app.all('/*', function (req: Request, res: Response, next: NextFunction) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  next();
});

app.use('/', routers);

app.use((err, req, res, next) => {
  res.status(500).send({ error: err });
});

export default app;
