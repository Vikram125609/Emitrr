const app = require('./app');
const mongoose = require('mongoose');
require('dotenv').config()

process.on('uncaughtException', err => {
    console.log(err.name, err.message);
});

mongoose.set("strictQuery", false);
mongoose.connect('mongodb://localhost:27017/Emitrr').then(() => console.log('Database Connected Successfully !!')).catch((error) => console.log(error));

const port = 8080 || process.env.PORT;
app.listen(port, () => {
    console.log(`Server is running at ${port}`)
})