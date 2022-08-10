const middleware = {};
const _ = require('lodash');
const Jwt = require('./src/helpers/jwt');
const adminModel = require('./src/modules/admin/adminModel');

middleware.checkUserAuthorizedOrNot = async (req, res, next) => {
    const authorization = req.headers['x-auth-token'];
    if (authorization && !_.isEmpty(authorization)) {
        try {
            const tokenInfo = Jwt.decodeAuthToken(authorization.toString());
            if (tokenInfo) {
                const user = await adminModel.findOne({ email: tokenInfo.email });
                if (user && user._id && user.isActive === true) {
                    req.body.user = user;
                    next();
                } else {
                    res.status(401).json({ message: "You are unauthorized user." });
                }
            } else {
                res.status(401).json({ message: "You are unauthorized user." });
            }
        } catch (error) {
            res.status(500).json({message: error});
        }
    } else {
        res.status(401).json({ message: "You are unauthorized user." });
    }
}

module.exports = middleware;