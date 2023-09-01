const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const cppSchema = new Schema({
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
const Cpp = new model('cpp', cppSchema);
module.exports = Cpp;