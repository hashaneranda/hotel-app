const { gql } = require("apollo-server");

const typeDefs = gql`
  scalar Date

  type Order @key(fields: "id") {
    id: ID!
    user: User!
    order: [OrderItem]
    createdAt: Date
  }

  type OrderItem {
    food: Food
    quantity: Int!
  }

  type OrderResponse {
    success: Boolean!
    data: Order
  }

  type AllOrderResponse {
    success: Boolean!
    data: [Order]
  }

  input OrderValue {
    food: ID!
    quantity: Int!
  }

  extend type Query {
    fetchAllOrders: AllOrderResponse!
    fetchAllMyOrders: AllOrderResponse!
  }

  extend type Mutation {
    createOrder(order: [OrderValue]!): OrderResponse!
  }
`;

module.exports = typeDefs;
