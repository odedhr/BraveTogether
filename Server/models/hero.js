'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Hero extends Model {
    static associate(models) {}
  };
  Hero.init({
    id: {
        type: DataTypes.INTEGER,
        unique: true
    },
    hero_id: {
        type: DataTypes.INTEGER,
    },
    manager_id: {
        type: DataTypes.INTEGER,
    },
    first_name: {
        type: DataTypes.STRING,
    },
    last_name: {
        type: DataTypes.STRING,
    },
    image: {
        type: DataTypes.STRING,
    },
    location: {
        type: DataTypes.STRING,
    }
  }, {
    sequelize,
    modelName: 'Hero',
    underscored: true
  });

  return Hero;
};