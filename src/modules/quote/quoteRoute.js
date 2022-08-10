const express = require('express');
const middleware = require('../../../middleware');
const quoteController = require('./quoteController');
const quoteMiddleware = require('./quoteMiddleware');
const quoteRoute = express.Router();

quoteRoute.post('/addQuote', middleware.checkUserAuthorizedOrNot, quoteController.addQuote);

quoteRoute.get('/getQuotes', middleware.checkUserAuthorizedOrNot, quoteController.getQuotes);

quoteRoute.post('/updateQuote', middleware.checkUserAuthorizedOrNot,
    quoteMiddleware.checkQuoteId, quoteController.updateQuote);

quoteRoute.post('/deleteQuote', middleware.checkUserAuthorizedOrNot, quoteMiddleware.checkQuoteId,
    quoteController.deleteQuote);

module.exports = quoteRoute;