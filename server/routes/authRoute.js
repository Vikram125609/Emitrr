const express = require('express');
const { signup } = require('../controllers/authController');
const router = express.Router();
router.get("/auth", signup);
module.exports = router;