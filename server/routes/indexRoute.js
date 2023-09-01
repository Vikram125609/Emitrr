const express = require('express');
const router = express.Router();
const authRoute = require('./authRoute');
const testRoute = require('./testRoute');
router.use("/api/v1", authRoute);
router.use("/api/v1", testRoute);
module.exports = router;