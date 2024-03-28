import { ApolloServer } from '@apollo/server';
import execSchema from './execSchema';
import express from 'express';
import http from 'http';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import cors from 'cors';
import { expressMiddleware } from '@apollo/server/express4';
import logger from 'morgan';
import { ApolloServerPluginLandingPageGraphQLPlayground } from '@apollo/server-plugin-landing-page-graphql-playground';

interface IContext {
  token?: string;
}

require('dotenv').config();

const startServer = async () => {
  const PORT = (process.env.PORT && +process.env.PORT) || 4000;

  const app = express();
  const httpServer = http.createServer(app);

  const server = new ApolloServer<IContext>({
    schema: execSchema,
    introspection: true,
    plugins:
      process.env.NODE_ENV === 'production'
        ? [ApolloServerPluginDrainHttpServer({ httpServer })]
        : [
            ApolloServerPluginDrainHttpServer({ httpServer }),
            ApolloServerPluginLandingPageGraphQLPlayground(),
          ],
  });

  await server.start();

  const corsOptions = {
    origin: 'https://ddoc-user-screen-1.vercel.app',
    // origin: 'http://localhost:3000',
    credentials: true,
  };

  app.use(
    '/graphql',
    cors<cors.CorsRequest>(corsOptions),
    express.json(),
    logger('tiny'),
    expressMiddleware(server, {
      context: async ({ req }) => ({ token: req.headers.token }),
    })
  );

  await new Promise<void>((resolve) =>
    httpServer.listen({ port: PORT }, resolve)
  );
  console.log(`🚀 Server ready at http://localhost:4000/graphql`);
};

startServer();
