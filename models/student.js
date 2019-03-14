
const mongoose = require('mongoose');

const Student = mongoose.model('Students', new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 25
    }
}));