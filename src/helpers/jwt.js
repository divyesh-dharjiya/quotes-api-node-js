const jwt = require('jsonwebtoken');
const Jwt = {};

Jwt.getAuthToken = (data) => {
    return jwt.sign(data, process.env.JWT_SECRET);
}

Jwt.decodeAuthToken = (token) => {
    if (token) {
        try {
            return jwt.verify(token, process.env.JWT_SECRET);
        } catch (error) {
            return false;
        }
    }
    return false;
}

module.exports = Jwt;