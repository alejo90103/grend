// GraphQL Schema
import { makeExecutableSchema } from 'graphql-tools';

// Schema Models
import typeDefs from '../schemas';

// Resolvers Models
import resolvers from '../resolvers';

const graphqlSchema = makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers
});

export default graphqlSchema;
