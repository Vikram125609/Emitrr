const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const pythonSchema = new Schema({
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
const Python = new model('python', pythonSchema);
module.exports = Python;