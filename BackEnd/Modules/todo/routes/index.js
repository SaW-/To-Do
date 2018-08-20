var express = require('express');
var router = express.Router();
var checkAuth = require('../../../middleware/check-auth');

module.exports = function(app) {
    var todo = app.Modules.Todo.controllers.v1.TodoController;

    router.get('/',checkAuth, todo.index);
    router.post('/', checkAuth, todo.store);
    router.get('/:id',checkAuth,  todo.show);
    router.put('/:id', checkAuth, todo.update);
    router.delete('/:id', checkAuth, todo.delete);

    app.use('/api/v1/to-do',router);  
};