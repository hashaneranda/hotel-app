const { gql } = require("apollo-server");

const typeDefs = gql`
  type Food @key(fields: "id") {
    id: ID
    name: String!
    price: Int!
    image: String
    description: String
    addedBy: User!
  }

  type Response {
    success: Boolean!
    data: Food
  }

  type AllResponse {
    success: Boolean!
    data: [Food]
  }

  extend type Query {
    fetchAllFoods: AllResponse!
  }

  extend type Mutation {
    createFood(
      name: String!
      price: Int!
      description: String
      image: String
    ): Response!
  }

  extend type User @key(fields: "id") {
    id: ID! @external
  }
`;

module.exports = typeDefs;
