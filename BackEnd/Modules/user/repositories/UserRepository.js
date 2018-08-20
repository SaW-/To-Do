var models = require("../../../models");

exports.findUserByEmail = (email) => {
  return models.User.findOne({ where: { email: email } }).then(user => {
    return user;
  });
}

exports.create = (user) => {
  return models.User.create(user).then(user => {
    return user;
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