'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {}
  };
  User.init({
    user_id: {
      type: DataTypes.INTEGER,
      unique: true
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
    }
  }, {
    sequelize,
    modelName: 'User',
    underscored: true
  });

  return User;
};