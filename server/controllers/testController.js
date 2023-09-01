const mongoose = require('mongoose');
const Ruby = require('./../models/ruby');
const Java = require('./../models/java');
const Cpp = require('./../models/cpp');
const Python = require('./../models/python');
const Javascript = require('./../models/javascript');

const getTestQuestions = async (req, res, next) => {
    const { language } = req.body;
    let testQuestions;
    if (language === 'Ruby') {
        testQuestions = await Ruby.find();
    }
    else if (language === 'Java') {
        testQuestions = await Java.find();
    }
    else if (language === 'Cpp') {
        testQuestions = await Cpp.find();
    }
    else if (language === 'Python') {
        testQuestions = await Python.find();
    }
    else {
        testQuestions = await Javascript.find();
    }
    return res.status(200).json({ testQuestions });
};
module.exports = { getTestQuestions };