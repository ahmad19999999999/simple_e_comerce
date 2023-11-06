'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Setting extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Setting.init({
    sitename: DataTypes.STRING,
    phone_one: DataTypes.STRING,
    phone_two: DataTypes.STRING,
    email_one: DataTypes.STRING,
    email_two: DataTypes.STRING,
    logo: DataTypes.STRING,
    favicon: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Setting',
  });
  return Setting;
};