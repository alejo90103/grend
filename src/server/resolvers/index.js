// import { neo4jgraphql } from 'neo4j-graphql-js';

// import Neo4j driver
import {v1 as neo4j} from 'neo4j-driver';

import config from '../config';

const driver = neo4j.driver(
  config.neo4j_URI,
  neo4j.auth.basic(
    config.neo4j_USER,
    config.neo4j_PASSWORD
  )
);

export default {
  Query: {
    allBrands() {
      const session = driver.session();
      const query = 'MATCH (brand:Brand) RETURN brand{ .name, models: [(brand)<-[MODEL_OF]-(brand_models:Model) | brand_models { .name }]}; ';
      return session.run(query)
        .then( result => {
          return result.records.map(record => {
            return record.get('brand');
          });
        });
    },
    allModels() {
      const session = driver.session();
      const query = 'MATCH (model:Model) RETURN model;';
      return session.run(query)
        .then( result => {
          return result.records.map(record => {
            return record.get('model').properties;
          });
        });
    }
  }
};
