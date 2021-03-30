'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('heros', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      hero_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        unique: true
      },
      manager_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: false
      },
      first_name: {
        type: Sequelize.STRING,
        defaultValue: false
      },
      last_name: {
        type: Sequelize.STRING,
        defaultValue: false
      },
      image: {
        allowNull: true,
        type: Sequelize.String
      },
      location: {
        allowNull: false,
        type: Sequelize.STRING,
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('heros');
  }
};
