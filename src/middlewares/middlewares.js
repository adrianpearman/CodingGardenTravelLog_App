// Middlware on unfound routes
const unfoundRoute = (req, res, next) => {
  const err = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(err);
};

// General ErrorHandling Middleware
// eslint-disable-next-line-no-unused-vars
const generalErrorHandler = (error, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: error.message,
    stack: process.env.NODE_ENV === 'production' ? ':)' : error.stack,
  });
};

module.exports = {
  unfoundRoute,
  generalErrorHandler,
};
