const adminModel = require("./adminModel");
const bcryptjs = require('bcryptjs');
const Jwt = require('../../helpers/jwt');

const adminMiddleWare = {};

adminMiddleWare.loginMiddleware = async (req, res, next) => {
    const isAdmin = await adminModel.findOne({ email: req.body.email });
    if (isAdmin && isAdmin._id && isAdmin.isActive === true) {
        const isValidPassword = await bcryptjs.compare(req.body.password, isAdmin.password);
        if (isValidPassword) {
            req.body.token = await Jwt.getAuthToken({ email: req.body.email });
            next();
        } else {
            res.status(400).json({ message: "Invalid Password." });
        }
    } else {
        res.status(400).json({ message: "Invalid Credentials." });
    }
}

module.exports = adminMiddleWare;