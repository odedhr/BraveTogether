'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Hero, {
        foreignKey: 'manager_id',
        as: 'heroes'
      });
    }
  };
  User.init({
    user_id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    is_manager: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    has_criminal_record: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    has_committed_to_privacy: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    image: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'User',
    underscored: true
  });

  return User;
};