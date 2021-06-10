const jwt = require("jsonwebtoken");

//config
const configEnv = require("../config/config");

const geneareteToken = (id, time = null) => {
  return jwt.sign({ id }, configEnv.jwt.secret, {
    // expiresIn: 24 * 10 * 50
  });
};

const verifyToken = (token) => {
  return jwt.verify(token, configEnv.jwt.secret);
};

module.exports = {
  geneareteToken,
  verifyToken,
};
