const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const javascriptSchema = new Schema({
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
const Javascript = new model('javascript', javascriptSchema);
module.exports = Javascript;