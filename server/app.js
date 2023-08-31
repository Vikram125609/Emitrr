const express = require('express');
const cors = require('cors');
const app = express();
const indexRoute = require('./routes/indexRoute');
// const recruiterIndexRoute = require('./routes/recruiter/indexRoute');
// const jobseekerIndexRoute = require('./routes/jobseeker/indexRoute');
// const benchsalesIndexRoute = require('./routes/benchsales/indexRoute');
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
const corsOptions = {
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200,
}
app.use(cors(corsOptions));
app.use('/', indexRoute);
// app.use('/', recruiterIndexRoute);
// app.use('/', jobseekerIndexRoute);
// app.use('/', benchsalesIndexRoute);
module.exports = app;