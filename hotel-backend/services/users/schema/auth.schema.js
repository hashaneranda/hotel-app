const { gql } = require("apollo-server");

const typeDefs = gql`
  scalar Date

  type User @key(fields: "id") {
    id: ID!
    name: String!
    email: String!
  }

  type UserResponse {
    success: Boolean!
    token: Token
    user: User
  }

  type Token {
    token: String
    expires: Date
  }

  type ActionResponse {
    success: Boolean!
  }

  extend type Query {
    loginUser(email: String!, password: String!): UserResponse!
  }

  extend type Mutation {
    createUser(name: String!, email: String!, password: String!): UserResponse!
  }
`;

module.exports = typeDefs;
