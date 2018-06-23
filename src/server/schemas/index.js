export default `

  type Brand {
    id: ID!,
    name: String!,
    models: [Model!]
  }

  type Model {
    id: ID!,
    name: String!,
    rating: String!,
    year: String!,
    sells: String!,
  }

  type Query {
    allBrands: [Brand!]!,
    allModels: [Model!]
  }

`;
// models: (first: Int = 10, offset: Int = 0): [Models] @relations(name: "MODEL_OF", direction: "IN")
// allModels: [Model!]
