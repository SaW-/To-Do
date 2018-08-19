var express = require('express');
var router = express.Router();

module.exports = function(app) {
    var todo = app.Modules.Todo.controllers.v1.TodoController;

    router.get('/todos',  todo.index);

    app.use('/api/v1', router);  
};