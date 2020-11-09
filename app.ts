import { ApolloServer, AuthenticationError } from 'apollo-server-express'
import { makeSchema } from '@nexus/schema'
import createExpress from 'express'
import * as types from './models/entry';
import { log } from './logger';
import permissions from './permissions';
import { applyMiddleware } from 'graphql-middleware';

const schema = makeSchema({
  types: [types],
});

const apollo = new ApolloServer({
  context: ({ req }: { req: Request}) => {
    log.error(req.headers);
    // if (!user) throw new AuthenticationError('you must be logged in'); 

    return { logger: log.child('request'), headers: req.headers };
  },
  schema: applyMiddleware(schema, permissions)
});

const express = createExpress();

apollo.applyMiddleware({ app: express, cors: {} });

express.listen(4000, () => {
  console.log(`🚀 GraphQL service ready at http://localhost:4000/graphql`)
})
