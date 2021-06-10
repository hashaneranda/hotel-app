const { ApolloServer } = require("apollo-server");
const { buildFederatedSchema } = require("@apollo/federation");

const resolvers = require("./resolvers");
const typeDefs = require("./schema");

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
