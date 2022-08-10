const mongoose = require('mongoose');
require('dotenv').config();
const URL = process.env.DB_URL;
console.log(URL);
module.exports = {
    connection: mongoose
        .connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(() => {
            console.log("Connected!");
        }).catch((error) => {
            console.log("Error in Database connection : ", error);
            process.exit();
        })
}