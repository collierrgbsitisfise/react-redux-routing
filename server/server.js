const express = require('express');
const bodyParser = require('body-parser');
const validator = require('validator');
const config = require('./config');
const app = express();
const users = require('./routes/users');

//allow cross sites requests
const allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}

app.use(allowCrossDomain);
app.use(bodyParser.json());

app.use('/api/users', users);

app.listen(config.PORT, () => {
    console.log(`Server succesfuly started , check it on https://127.0.0.1:${config.PORT}`);
});
