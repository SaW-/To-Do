var models = require("../../../models");

exports.listAll = () => {
  return models.Todo.findAll().then(todos => {
    return todos;
  });
}

exports.getOne = (id) => {
  return models.Todo.findById(id).then(todo => {
    return todo;
  });
}

exports.create = (todo) => {
  return models.Todo.create(todo).then(todo => {
    return todo;
  });
}

exports.update = (id,data) => {
  return models.Todo.update(
    data,
    { where: { id: id } }
  ).then(result  => {
    return result;
  });
}

exports.delete = (id) => {
  return models.Todo.destroy({
    where: {
        id: id
    }
  }).then(result  => {
    return result;
  });
}

return module.exports;