
const mongoose = require('mongoose');

const Class = mongoose.model('classes', new mongoose.Schema({
    title: {
        type: String,
        minLength: 5,
        maxLength: 25,
        required: true
    }
}));