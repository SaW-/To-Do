var TodoService = require("../../services/TodoService.js");

exports.index = function(req, res, next) {
  var s = TodoService.todos();
    res.send(s);
  };