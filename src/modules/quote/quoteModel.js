const mongoose = require('mongoose');
const quoteSchema = new mongoose.Schema({
    imageUrl: {
        type: String,
        required: true
    }, imageText: {
        type: String,
        required: true
    }, authorName: {
        type: String
    }, categoryId: [{
        type: String,
        required: true
    }], isDeleted: {
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

const quoteModel = mongoose.model('quote', quoteSchema);
module.exports = quoteModel;