var express = require('express');
var router = express.Router();

module.exports = function(app) {
    var user = app.Modules.User.controllers.v1.UserController;

    router.post('/signup',  user.signup);
    router.post('/signin',  user.signin);

    app.use('/api/v1/user', router);  
};