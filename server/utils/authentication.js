const jwt = require('jsonwebtoken');

const getToken = (user) => {
    const payload = user;
    return 'Bearer ' + jwt.sign(payload, 'thisis32bitsecretkey');
};

const verifyToken = (token) => {
    return jwt.verify(token, 'thisis32bitsecretkey')
}
module.exports = { getToken, verifyToken };