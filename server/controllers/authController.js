const axios = require('axios');
const User = require('../models/userModel');
const { getToken } = require('../utils/authentication');
const signup = async (req, res, next) => {
    const { code } = req.query;
    const options = {
        REDIRECT: 'http://localhost:8080/api/v1/auth',
        CLIENT_ID: '1008926871515-bmmd4i5dlkke5bntqvst08etpe2em42h.apps.googleusercontent.com',
        CLIENT_SECRET: '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',
        scope: ['https://www.googleapis.com/auth/userinfo.email', 'https://www.googleapis.com/auth/userinfo.profile'].join(" ")
    }
    const url = `https://oauth2.googleapis.com/token?code=${code}&client_id=${options.CLIENT_ID}&client_secret=${options.CLIENT_SECRET}&redirect_uri=${options.REDIRECT}&grant_type=authorization_code&scope=${options.scope}`;
    const response = await axios.post(url, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });
    const { access_token } = response?.data;
    const getUserData = await axios.get(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${access_token}`);
    const { sub, name, given_name, family_name, picture, email } = getUserData.data;
    const userAlreadyExist = await User.findOne({ email: email });
    if (userAlreadyExist) {
        const token = getToken({ _id: userAlreadyExist._id, email: email });
        const cookieData = {
            _id: userAlreadyExist._id, email: email, picture: picture, given_name: given_name, token: token, name: name,
        }
        res.cookie('user', cookieData, { expire: 259200000 + Date.now() });
        res.redirect('http://localhost:3000/home');
        return;
    }
    const user = new User({ sub, name, given_name, family_name, picture, email });
    await user.save();
    const token = getToken({ _id: user._id, email: email });
    const cookieData = {
        _id: user._id, email: email, picture: picture, given_name: given_name, token: token, name: name,
    }
    res.cookie('user', cookieData, { expire: 259200000 + Date.now() });
    res.redirect('http://localhost:3000/home');
}

module.exports = { signup };