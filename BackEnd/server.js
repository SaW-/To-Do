var express = require('express');
var load = require('express-load');
var path = require('path');
var bodyParser = require('body-parser');
var validator = require('express-validator');

var port = 3000;

var app = express();

// Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(validator());

load('Modules/Todo').into(app);
load('Modules/User').into(app);

app.listen(port, function(){
    console.log('Server started on port '+port);
});