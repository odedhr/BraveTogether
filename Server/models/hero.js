'use strict';

const { Model, Sequelize } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Hero extends Model {
    static associate(models) {
      Hero.belongsTo(models.User, {
        foreignKey: 'manager_id',
        as: 'manager'
      });
    }
  };
  Hero.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    full_name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    speciality: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING,
    },
    location: {
      type: DataTypes.STRING
    },
    manager_id: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    image: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Hero',
    tableName: 'heroes',
    underscored: true
  });

  return Hero;
};