const { ApolloServer } = require("apollo-server");
const { ApolloGateway, RemoteGraphQLDataSource } = require("@apollo/gateway");
const { getUser } = require("./middleware/auth");

const gateway = new ApolloGateway({
  serviceList: [
    { name: "users", url: "http://localhost:4001/graphql" },
    { name: "foods", url: "http://localhost:4002/graphql" },
  ],
  buildService: ({ url }) =>
    new RemoteGraphQLDataSource({
      url,
      willSendRequest: ({ request, context }) => {
        if (context.me)
          request.http.headers.set("user", JSON.stringify(context.me));
      },
    }),
});

const server = new ApolloServer({
  gateway,
  subscriptions: false,
  context: async ({ req, res, connection }) => {
    if (req) {
      let me = await getUser(req);

      return {
        me,
        req,
        res,
      };
    }
  },
});

module.exports = server;
