const { ApolloServer } = require("apollo-server");
const { buildFederatedSchema } = require("@apollo/federation");

const resolvers = require("./resolvers");
const typeDefs = require("./schema");

const server = new ApolloServer({
  schema: buildFederatedSchema([
    {
      typeDefs: typeDefs.authSchema,
      resolvers: resolvers.authResolver,
    },
  ]),
  subscriptions: false,
  context: ({ req, me }) => {
    //   const user = req.headers.user;
    if (me) {
      return { me };
    }
  },
});

module.exports = server;
