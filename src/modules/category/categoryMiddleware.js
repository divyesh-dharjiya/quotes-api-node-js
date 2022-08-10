const { response } = require("express");
const categoryModel = require("./categoryModel");

const categoryMiddleware = {};

categoryMiddleware.checkCategoryName = async (req, res, next) => {
    const category = await categoryModel.findOne({ categoryName: req.body.categoryName });
    if (category) {
        res.status(400).json({message: "Category name is already available."});
    } else {
        next();
    }
}

categoryMiddleware.checkCategoryId = (req, res, next) => {
    if (req.body.id) {
        next();
    } else {
        res.status(400).json({message: "Please send your category id." })
    }
}

module.exports = categoryMiddleware;