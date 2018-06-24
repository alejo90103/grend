<<<<<<< HEAD
##GraphQL Query
query{
  allModels {
    name
  },
  allBrands {
    name,
    models {
      name
    }
  }
}
##GraphQL Response
{
  "data": {
    "allModels": [
      {
        "name": "Prius"
      },
      {
        "name": "Impreza"
      },
      {
        "name": "Vivio"
      },
      {
        "name": "Hilux"
      }
    ],
    "allBrands": [
      {
        "name": "Toyota",
        "models": [
          {
            "name": "Prius"
          },
          {
            "name": "Hilux"
          }
        ]
      },
      {
        "name": "Subaru",
        "models": [
          {
            "name": "Impreza"
          },
          {
            "name": "Vivio"
          }
        ]
      }
    ]
  }
}
=======
# grend
Project using graphql, neo4j, express and react
>>>>>>> 0ac9f04124cc7a0ec86861d725b892db4cf8a399
