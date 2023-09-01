const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const rubySchema = new Schema({
    question: { 
        type: String,
        required: true,
    },
    options: {
        type: Array
    },
    correct_ans: {
        type: Number
    },
    markedCorrect: {
        type: Number
    },
    markedIncorrect: {
        type: Number
    }
});
const Ruby = new model('ruby', rubySchema);
module.exports = Ruby;