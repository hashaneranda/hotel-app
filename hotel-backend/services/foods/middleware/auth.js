const { AuthenticationError } = require("apollo-server");
const { skip } = require("graphql-resolvers");

const isAuthenticated = (parent, args, { me }) =>
  me ? skip : new AuthenticationError("Not authenticated as user.");

module.exports = {
  isAuthenticated,
};
