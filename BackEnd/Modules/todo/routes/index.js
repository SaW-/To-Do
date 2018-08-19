var express = require('express');
var router = express.Router();

module.exports = function(app) {
    var todo = app.Modules.Todo.controllers.v1.TodoController;

    router.get('/',  todo.index);
    router.post('/',  todo.store);
    router.get('/:id',  todo.show);
    //router.put('/:id',  todo.update);
    //router.get('/:id/delete',  todo.delete);

    app.use('/api/v1', router);  
};