'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn(
      'todos',
      'user_id',
      Sequelize.INTEGER
    );
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn(
      'todos',
      'user_id'
    );
  }
};
