'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_permision extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user_permision.belongsTo(models.Permision); 
    }
  }
  user_permision.init({
   // name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user_permision',
  });
  return user_permision;
};