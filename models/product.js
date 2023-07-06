const path = require('path');
module.exports = (sequelize, DataTypes) => {

    const Product = sequelize.define('product', 
    {
    
        name: DataTypes.STRING,
        slug: DataTypes.STRING,
        description:DataTypes.TEXT,
        quantity:DataTypes.INTEGER,
        price:DataTypes.DOUBLE,
        image:
        {
            type: DataTypes.STRING,
        },
        
        status:DataTypes.BOOLEAN ,
       
        

    },
    {
        freezeTableName: true
    });
   
   
    return Product;

};