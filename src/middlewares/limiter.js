const rateLimit = require("express-rate-limit");
const MongoStore = require("rate-limit-mongo");
const keys = require("../../config/keys");

const rateLimitDelay = 2.5 * 1000;

const limiter = rateLimit({
  store: new MongoStore({
    uri: keys.MONGOURI,
    expireTimeMs: rateLimitDelay,
  }),
  max: 1,
  windowMs: rateLimitDelay,
});

module.exports = limiter;
