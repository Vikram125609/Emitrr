const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const javaSchema = new Schema({
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
const Java = new model('java', javaSchema);
module.exports = Java;