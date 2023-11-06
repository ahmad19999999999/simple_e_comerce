'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_roles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user_roles.belongsTo(models.Roles);
    }
  }
  user_roles.init({
    //name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user_roles',
  });
  return user_roles;
};