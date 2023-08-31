const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    sub: {
        type: String,
    },
    name: {
        type: String,
    },
    given_name: {
        type: String,
    },
    family_name: {
        type: String,
    },
    picture: {
        type: String,
    },
    email: {
        type: String,
    }
});

const User = new mongoose.model('User', userSchema);
module.exports = User;