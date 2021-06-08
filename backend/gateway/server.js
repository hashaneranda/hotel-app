const { ApolloServer } = require("apollo-server");
const { ApolloGateway, RemoteGraphQLDataSource } = require("@apollo/gateway");
const jwt = require("jsonwebtoken");

const users = [
  {
    id: 1,
    username: "imhassane",
    email: "imhassane@test.com",
    password: "imhassane",
  },
  {
    id: 2,
    username: "imjannet",
    email: "imjannet@test.com",
    password: "imjannet",
  },
  {
    id: 3,
    username: "christophe",
    email: "christophe@test.com",
    password: "christophe",
  },
  { id: 4, username: "malik", email: "malik@test.com", password: "malik" },
];

const gateway = new ApolloGateway({
  serviceList: [
    { name: "users", url: "http://localhost:4001/graphql" },
    { name: "foods", url: "http://localhost:4002/graphql" },
  ],
  buildService: ({ url }) =>
    new RemoteGraphQLDataSource({
      url,
      willSendRequest: ({ request, context }) => {
        if (context.user)
          request.http.headers.set("user", JSON.stringify(context.user));
      },
    }),
});

const server = new ApolloServer({
  gateway,
  subscriptions: false,
  context: async ({ req }) => {
    let token = req.headers.authorization || null;
    if (token) {
      try {
        const { id } = await jwt.verify(token, "secret");
        const user = users.find((u) => u.id === id);
        return { user };
      } catch (ex) {
        return { user: null };
      }
    }
  },
});

module.exports = server;
