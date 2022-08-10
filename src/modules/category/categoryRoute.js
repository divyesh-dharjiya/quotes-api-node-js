const express = require('express');
const middleware = require('../../../middleware');
const categoryController = require('./categoryController');
const categoryMiddleware = require('./categoryMiddleware');
const categoryRoute = express.Router();
const cors = require('cors');

categoryRoute.post('/addCategory', middleware.checkUserAuthorizedOrNot,
    categoryMiddleware.checkCategoryName, categoryController.addCategory);

categoryRoute.get('/getCategories', cors(),middleware.checkUserAuthorizedOrNot, categoryController.getCategories);

categoryRoute.post('/updateCategory', middleware.checkUserAuthorizedOrNot, categoryMiddleware.checkCategoryId,
    categoryMiddleware.checkCategoryName, categoryController.updateCategory);

categoryRoute.post('/deleteCategory', middleware.checkUserAuthorizedOrNot, categoryMiddleware.checkCategoryId,
    categoryController.deleteCategory);

module.exports = categoryRoute;