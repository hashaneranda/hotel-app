const { AuthenticationError } = require("apollo-server");
const { skip } = require("graphql-resolvers");

//utils
const { verifyToken } = require("../utils/tokenUtils");

//modals
const { User } = require("../models");

const jwtVerify = async (payload) => {
  try {
    const user = await User.findById(payload.sub);
    if (!user) {
      // throw new ForbiddenError("Your session expired. Sign in again.");
      return;
    }
    return user;
  } catch (error) {
    // throw new ForbiddenError("Your session expired. Sign in again.");
    return;
  }
};

const getUser = async (req) => {
  let token = req.headers["authorization"];

  if (token) {
    token = token.split(" ")[1];
  }

  if (token) {
    try {
      return await jwtVerify(verifyToken(token));
    } catch (e) {
      // throw new ForbiddenError("Your session expired. Sign in again.");
      return;
    }
  }
};

const isAuthenticated = (parent, args, { me }) =>
  me ? skip : new AuthenticationError("Not authenticated as user.");

module.exports = {
  getUser,
  isAuthenticated,
};
