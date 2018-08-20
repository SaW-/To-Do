'use strict';
module.exports = (sequelize, DataTypes) => {
  var msgQueue = sequelize.define('msgQueue', {
    subject: DataTypes.STRING,
    todoId: DataTypes.INTEGER,
    reminder: DataTypes.DATE,
    to: DataTypes.STRING
  }, {});
  msgQueue.associate = function(models) {
    // associations can be defined here
  };
  return msgQueue;
};