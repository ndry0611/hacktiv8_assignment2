const jwt = require('jsonwebtoken');
const secret = 'hacktiv8';

function generateToken(payload) {
    const token = jwt.sign(payload, secret);

    return token;
}

function verifyToken(token) {
    const decodeToken = jwt.verify(token, secret);
    return decodeToken;
}

module.exports = { generateToken, verifyToken }