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
