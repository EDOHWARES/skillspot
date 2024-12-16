const express = require('express');
const {registerServiceProvider} = require('../controllers/serviceProviderController');
const serviceProviderRouter = express.Router();

serviceProviderRouter.post('/register', registerServiceProvider);

module.exports = serviceProviderRouter;