const express = require('express');
const bodyParser = require('body-parser');
const app = express.Router();
const cors = require('cors');
const categoryRoute = require('./src/modules/category/categoryRoute');
const adminRoute = require('./src/modules/admin/adminRoute');
const quoteRoute = require('./src/modules/quote/quoteRoute');
const url = '/api/v1';


app.use(cors());
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));
app.use(bodyParser.json());

app.use(url + '/admin', adminRoute);

app.use(url + '/category', categoryRoute);
app.use(url + '/quote', quoteRoute);

app.all('/*', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Request-Headers", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Headers, x-auth-token");
    res.header("Access-Control-Allow-Methods", "GET, POST");
    return res.status(404).json({ Error: "Not Found." });
});

module.exports = app;
