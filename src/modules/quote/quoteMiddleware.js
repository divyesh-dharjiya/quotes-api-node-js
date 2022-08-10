const quoteMiddleware = {};

quoteMiddleware.checkQuoteId = (req, res, next) => {
    if (req.body.id) {
        next();
    } else {
        res.status(400).json({ error: "Please json your quote id." })
    }
}

module.exports = quoteMiddleware;