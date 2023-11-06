'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Order.init({
    order_number: DataTypes.STRING,
    order_total: DataTypes.DOUBLE,
    order_note: DataTypes.STRING,
    type_delivery: DataTypes.STRING,
    delivery_charge: DataTypes.DOUBLE,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};