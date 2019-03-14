const express = require('express');
const apiController = require('../controllers/apiController');

const apiRouter = express.Router();

apiRouter.get('/profile', apiController.getProfile);
// apiRouter.post('/profile', apiController.updateProfile);
apiRouter.get('/steps', apiController.getSteps);

module.exports = apiRouter;
