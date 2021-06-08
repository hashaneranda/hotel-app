const jwt = require("jsonwebtoken");
const moment = require("moment");
const config = require("../config/config");

/**
 * Generate token
 * @param {ObjectId} userId
 * @param {Moment} expires
 * @param {string} [secret]
 * @returns {string}
 */
const generateToken = (userId, expires, secret = config.jwt.secret) => {
  const payload = {
    sub: userId,
    iat: moment().unix(),
    exp: expires.unix(),
  };
  return jwt.sign(payload, secret);
};

/**
 * Generate auth tokens
 * @param {User} user
 * @returns {Promise<Object>}
 */
const generateAuthTokens = async (user) => {
  const accessTokenExpires = moment().add(
    config.jwt.accessExpirationMinutes,
    "days"
  );
  const accessToken = generateToken(user.id, accessTokenExpires);

  return {
    token: accessToken,
    expires: accessTokenExpires.toDate(),
  };
};

module.exports = { generateToken, generateAuthTokens };
