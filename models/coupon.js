'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Coupon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Coupon.init({
    couponcode: DataTypes.STRING,
    persantage: DataTypes.FLOAT,
    startdate: DataTypes.DATE,
    enddate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Coupon',
  });
  return Coupon;
};