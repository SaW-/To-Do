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

return module.exports;