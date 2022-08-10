const express = require('express');
const adminController = require('./adminController');
const adminMiddleWare = require('./adminMiddleware');
const adminRoute = express.Router();

adminRoute.post('/login', adminMiddleWare.loginMiddleware, adminController.login);

module.exports = adminRoute;