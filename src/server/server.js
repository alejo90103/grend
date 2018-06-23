// import { apolloExpress, gql } from 'apollo-server';
import express from 'express';

// import { v1 as neo4j } from 'neo4j-driver';
import bodyParser from 'body-parser';
import config from './config';

import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../../webpack.config';

const server = express();

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

// middleware
server.use(webpackDevMiddleware(webpack(webpackConfig)));

// start server
server.listen(config.port, () => {
  console.log(`🚀🚀🚀🚀 Server running on port: ${config.port}`);
});

// GraphQL and GraphIQL
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';

// GraphQL Schema
import graphqlSchema from './graphql/';

// Routes
server.use(`${config.apiBaseURL}`, express.json(), graphqlExpress({
  schema: graphqlSchema,
  context: {}
}));

server.use('/graphiql', express.json(), graphiqlExpress({
  endpointURL: `${config.apiBaseURL}`
}));

// const server = new apolloExpress({
//   typeDefsBrand,
//   resolversBrand,
//   context: { driver }
// });
//
// server.listen().then(({ url }) => {
//   console.log(`GraphQL API read at ${url}`);
// });
