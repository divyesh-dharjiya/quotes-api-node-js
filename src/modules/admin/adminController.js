const AdminModel = require('./adminModel');
const adminController = {};

adminController.login = async (req, res) => {
    try {
        const response = {
            message: "You have logged in successfully.",
            token: req.body.token
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({
            message: error
        })
    }
}

module.exports = adminController;