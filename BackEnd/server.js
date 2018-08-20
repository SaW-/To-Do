var express = require('express');
var load = require('express-load');
var path = require('path');
var bodyParser = require('body-parser');
var validator = require('express-validator');
var mailCron = require('./cronjobs/reminderCronJobs');

var port = 3000;

var app = express();

// Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(validator());

app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
load('Modules/Todo').into(app);
load('Modules/User').into(app);

mailCron.reminders();

app.listen(port, function(){
    console.log('Server started on port '+port);
});