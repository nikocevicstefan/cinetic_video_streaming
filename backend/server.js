const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const users = require('./routes/users');
const faqs = require('./routes/faq');
const mongoose = require('./config/database'); //database configuration
var jwt = require('jsonwebtoken');
const app = express();

app.set('secretKey', 'nodeRestApi'); // jwt secret token
// connection to mongodb
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.use(logger('dev'));
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.get('/', function (req, res) {
    res.json({"tutorial": "Build REST API with node.js"});
});
// public routes
app.use('/users', users);
app.use('/faqs', faqs);
// private route
app.get('/favicon.ico', function (req, res) {
    res.sendStatus(204);
});

function validateUser(req, res, next) {
    jwt.verify(req.headers['x-access-token'], req.app.get('secretKey'), function (err, decoded) {
        if (err) {
            res.json({status: "error", message: err.message, data: null});
        } else {
            // add user id to request
            req.body.userId = decoded.id;
            next();
        }
    });
}

// express doesn't consider not found NotFound as an error so we need to handle NotFound explicitly
// handle NotFound error
app.use(function (req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});
// handle errors
app.use(function (err, req, res, next) {
    console.log(err);

    if (err.status === 404)
        res.status(404).json({message: "Not found"});
    else
        res.status(500).json({message: "Something looks wrong :( !!!"});
});
app.listen(5000, function () {
    console.log('Node server listening on port 5000');
});