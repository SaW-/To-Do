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
  },{});

  User.associate = function(models) {
    // associations can be defined here
  };

  User.prototype.validPassword= function(password,hash,user){
    return bcrypt.compare(password, hash).then(isMatch =>{
      if(isMatch){
        return true;
      }else{
        return false;
      }
    }).catch(err => { 
        throw new Error(); 
    });
  }

  User.prototype.toJSON =  function (token) {
    var values = Object.assign({}, this.get());
    values.token = token;
    delete values.password;
    return values;
  }


  User.beforeCreate((user, options) => {
    return bcrypt.hash(user.password, 10)
        .then(hash => {
            user.password = hash;
        })
        .catch(err => { 
          user.password = "";
        });

  });

  return User;
};