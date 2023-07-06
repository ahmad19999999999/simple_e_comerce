
module.exports = (sequelize, DataTypes) => {

    const Order = sequelize.define('orders', 
    {

        order_number: DataTypes.INTEGER,
        order_total: DataTypes.DOUBLE,
        order_note:DataTypes.STRING,
        type_delivery:DataTypes.STRING,
        delivery_charge:DataTypes.DOUBLE,
        status:DataTypes.INTEGER


        
       
        

    },
    {

        freezeTableName: true
    });
   
   
    return Order;

};