'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('events', {
      event_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      topic: {
        type: Sequelize.STRING
      },
      lat: {
        type: Sequelize.STRING,
        allowNull: false
      },
      long: {
        type: Sequelize.STRING,
        allowNull: false
      },
      address: Sequelize.STRING,
      hero_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      manager_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('events');
  }
};
