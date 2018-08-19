var TodoRepository = require("../repositories/TodoRepository.js");

module.exports = {
  todos: function() {
      return TodoRepository.list();
  },
  multiply: function(a,b) {
      return a*b
  }
};