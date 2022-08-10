const express = require('express');
const app = express();
require('./src/config/database');
const route = require('./route');

app.use('/', route);

app.listen(process.env.PORT, () => {
    console.log(`server is running on port ${process.env.PORT}`);
});
