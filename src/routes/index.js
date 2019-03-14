const express = require('express');
const authRouter = require('./auth');
const apiRouter = require('./api');

const appRouter = express.Router();

appRouter.use('/auth', authRouter);
appRouter.use('/api', apiRouter);
appRouter.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = appRouter;
