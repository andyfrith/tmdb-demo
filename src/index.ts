import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as path from 'path';
import * as express from 'express';
import { server } from './graphql';
import { ENV } from './env';
import { logger } from './logger';

(async () => {
  logger.info('tmdb-demo service starting', { ENV });
  const app = express();
  app.use(cors());
  app.use(bodyParser.json());

  app.use('/healthy', async (req, res) => {
    res.send({
      message: 'tbdb-demo is ok',
    });
  });

  server.applyMiddleware({ app, path: '/graphql' });

  app.listen({ port: ENV.PORT }, () => {
    logger.info(`tbdb-demo listening at :${ENV.PORT}...`);
  });
})();
