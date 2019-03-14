
const mongoose = require('mongoose');

const Assignment = mongoose.model('Assignments', new mongoose.Schema({
    assignmentType: {
        type: String,
        minLength: 5,
        maxLength: 25,
        required: true
    }
}));