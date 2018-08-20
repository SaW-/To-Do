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

exports.gPlusLogin = (user) => {
  return models.User.findOrCreate({
    where: {
      email: user.email,
      name: user.name,
      googleId: user.googleId,
      provider:user.provider
    }
  })
  .spread(function(userResult, created){
   return userResult;
  });

}


return module.exports;