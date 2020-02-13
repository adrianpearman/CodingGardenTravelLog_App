const RateLimit = require("express-rate-limit");
const MongoStore = require("rate-limit-mongo");
const keys = require("../../config/keys");

const rateLimitDelay = 25 * 1000;

const limiter = new RateLimit({
  store: new MongoStore({
    uri: keys.MONGOURI,
    expireTimeMs: rateLimitDelay
  }),
  max: 1,
  windowMs: rateLimitDelay
});

module.exports = limiter;
