const express = require('express');
const authController = require('../controllers/authController');

const authRouter = express.Router();

authRouter.get('/session', authController.session);
authRouter.get('/authorize', authController.authorize);
authRouter.get('/callback', authController.callback);
authRouter.get('/success', authController.success);
authRouter.get('/logout', authController.logout);

module.exports = authRouter;
