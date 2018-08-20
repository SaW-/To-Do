var models = require("../../../models");

exports.listAll = (userId) => {
  return models.Todo.findAll({attributes: [
    'id','Subject','comment',
    [models.Sequelize.fn('date_format', models.Sequelize.col('reminder'), '%Y-%m-%dT%h:%m'), 'reminder']
],
where:{user_id:userId}}).then(todos => {
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

exports.update = (id,data,userId) => {
  return models.Todo.update(
    data,
    { where: { 
      id: id,
      user_id:userId
     } }
  ).then(result  => {
    return result;
  });
}

exports.delete = (id,userId) => {
  return models.Todo.destroy({
    where: {
        id: id,
        user_id:userId
    }
  }).then(result  => {
    return result;
  });
}

return module.exports;