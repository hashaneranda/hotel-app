const { ApolloServer, gql } = require("apollo-server");
const { buildFederatedSchema } = require("@apollo/federation");

const resolvers = require("./resolvers");
const typeDefs = require("./schema");

// const typeDefs = gql`
//   extend type Query {
//     posts: [Post!]
//     post(id: Int!): Post
//   }

//   extend type Mutation {
//     createPost(title: String!, content: String!, author: Int!): Post
//   }

//   type Post @key(fields: "id") {
//     id: ID!
//     title: String!
//     content: String!
//     author: User! @provides(fields: "username")
//   }

//   extend type User @key(fields: "id") {
//     id: ID! @external
//     name: String! @external
//     posts: [Post]
//   }
// `;

// const resolvers = {
//   Post: {
//     __resolveReference: (post) => posts.find((p) => p.id === post.id),
//     author: (post) => users.find((u) => u.id === post.author),
//   },
//   User: {
//     posts: (user) => posts.filter((p) => p.author === user.id),
//   },
//   Query: {
//     posts: () => posts,
//     post: (_, { id }) => posts.find((p) => p.id === id),
//   },
//   Mutation: {
//     createPost: (_, args) => {
//       posts.push(args);
//       return args;
//     },
//   },
// };

const server = new ApolloServer({
  schema: buildFederatedSchema([
    {
      typeDefs: typeDefs.foodSchema,
      resolvers: resolvers.foodResolver,
    },
    {
      typeDefs: typeDefs.orderSchema,
      resolvers: resolvers.orderResolver,
    },
  ]),
  context: ({ req }) => {
    const me = req.headers.user;

    if (me) {
      return { me: JSON.parse(me) };
    }
  },
});

module.exports = server;
