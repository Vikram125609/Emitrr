const express = require('express');
const { getTestQuestions } = require('../controllers/testController');
const router = express.Router();
router.post("/test", getTestQuestions);
module.exports = router;