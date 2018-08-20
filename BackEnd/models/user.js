var bcrypt = require('bcrypt');

'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    googleId: DataTypes.TEXT,
    idToken: DataTypes.TEXT,
    provider: DataTypes.STRING,
    gToken: DataTypes.TEXT
  }, {
    classMethods:{
      validPassword: function(password,hash,done,user){
        bcrypt.compare(password, hash, function(err, isMatch) {
          if(err) console.log(err)
          if(isMatch){
            return done(null,user);
          }else{
            return done(null,false);
          }
      });
      }
    }
  });
  User.associate = function(models) {
    // associations can be defined here
  };

  User.beforeCreate((user, options) => {
    return bcrypt.hash(user.password, 10)
        .then(hash => {
            user.password = hash;
        })
        .catch(err => { 
            throw new Error(); 
        });

  });

  return User;
};