
module.exports = (sequelize, DataTypes) => {

    const Order_item = sequelize.define('order_item', 

    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
          },

        
        quantity:DataTypes.INTEGER,
        price:DataTypes.DOUBLE,
        
       
        

    },
    {
        freezeTableName: true
    });
   
   
    return Order_item ;

};