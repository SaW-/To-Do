'use strict';
module.exports = (sequelize, DataTypes) => {
  var Todo = sequelize.define('Todo', {
    Subject: DataTypes.STRING,
    comment: DataTypes.TEXT,
    reminder: DataTypes.DATE
  }, {});
  Todo.associate = function(models) {
    // associations can be defined here
    Todo.belongsTo(models.User, {foreignKey: 'user_id'})
  };

  return Todo;
};