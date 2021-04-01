'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    static associate(models) {
      Event.belongsTo(models.User, {
        foreignKey: 'manager_id',
        as: 'manager'
      });
      Event.belongsTo(models.Hero, {
        foreignKey: 'hero_id',
        as: 'hero'
      });
    }
  };
  Event.init({
    event_id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    topic: {
      type: DataTypes.STRING
    },
    lat: {
      type: DataTypes.STRING,
      allowNull: false
    },
    long: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: DataTypes.STRING,
    hero_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    manager_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Event',
    underscored: true
  });

  return Event;
};