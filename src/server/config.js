export default {
  port: process.env.PORT || 3000,
  neo4j_URI: process.env.NEO4J_URI || 'bolt://localhost:7687',
  neo4j_USER: process.env.NEO4J_USER || 'neo4j',
  neo4j_PASSWORD: process.env.NEO4J_PASSWORD || 'grand',
  apiBaseURL: '/graphql'
};
