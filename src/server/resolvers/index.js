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
      const query = 'MATCH (brand:Brand) RETURN brand;';
      return session.run(query)
        .then( result => {
          return result.records.map(record => {
            return record.get('brand').properties;
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
  // Models: {
  //   models(id) {
  //     console.log(id);
  //     const session = driver.session();
  //     const params = { brandId: id };
  //     const query = `MATCH (brand:Brand) WHERE brand.id = $brandId'
  //                    MATCH brand-[:MODEL_OF]->(models:Model)
  //                    RETURN models;
  //                   `;
  //     return session.run(query)
  //       .then( result => {
  //         return result.records.map(record => {
  //           console.log(record.get('model'));
  //           return record.get('model').properties;
  //         });
  //       });
  //   }
  // }
};
