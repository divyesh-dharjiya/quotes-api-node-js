const mongoose = require('mongoose');
const validate = require('../../helpers/validate');

const adminSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        minlength: 1,
        validate: [validate.EMAIL, 'Please enter valid email'],
        trim: true,
    },
    password: {
        type: String,
        require: true,
        minlength: 1,
        trim: true
    },
    isActive: {
        type: Boolean,
        default: true
    }
});

const adminModel = mongoose.model('admin', adminSchema);
module.exports = adminModel;