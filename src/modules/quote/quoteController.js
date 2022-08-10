const quoteModel = require("./quoteModel");
const quoteController = {};

quoteController.addQuote = async (req, res) => {
    try {
        const quote = new quoteModel(req.body);
        const quoteData = await quote.save();
        const response = {
            message: "Quote added successfully.",
            _id: quoteData._id
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json(error);
    }
}

quoteController.getQuotes = async (req, res) => {
    try {
        const query = {
            isDeleted: false
        };
        const allQuotes = await quoteModel.find(query);
        const response = {
            message: "Success.",
            data: allQuotes,
            totalCategory: allQuotes.length
        }
        res.status(200).json(response);
    } catch (error) {
        return res.status(400).json({ error: error })
    }
}

quoteController.updateQuote = async (req, res) => {
    try {
        const quoteId = await quoteModel.findOne({ _id: req.body.id });
        if (quoteId) {
            const query = {
                imageUrl: req.body.imageUrl,
                imageText: req.body.imageText,
                authorName: req.body.authorName,
                categoryId: req.body.categoryId,
                updatedAt: new Date()
            }
            await quoteModel.updateOne({ _id: req.body.id }, query);
            const response = {
                message: "Quote updated successfully."
            }
            res.status(200).json(response);
        } else {
            res.status(400).json({ message: "Quote id is not available." });
        }
    } catch (error) {
        return res.status(400).json({ error: error })
    }
}

quoteController.deleteQuote = async (req, res) => {
    try {
        const quoteId = await quoteModel.findOne({ _id: req.body.id });
        if (quoteId) {
            const query = {
                isDeleted: true
            };
            await quoteModel.updateOne({ _id: req.body.quoteId }, query);
            const response = {
                message: "Quote deleted successfully."
            }
            res.status(200).json(response);
        } else {
            res.status(400).json({ message: "Quote not available." });
        }
    } catch (error) {
        return res.status(400).json({ error: error })
    }
}

module.exports = quoteController;