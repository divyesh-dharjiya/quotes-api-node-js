const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    categoryName: {
        type: String,
        required: true
    }, isDeleted: {
        type: Boolean,
        default: false,
    }, createdAt: {
        type: Date,
        default: new Date()
    }, updatedAt: {
        type: Date,
        default: new Date()
    }
});

const categoryModel = mongoose.model('category', categorySchema);
module.exports = categoryModel;