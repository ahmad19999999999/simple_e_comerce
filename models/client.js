module.exports = (sequelize, DataTypes) => {

    const Client = sequelize.define('cliens', 
    {
      
        firstname: DataTypes.STRING,
        lastname: DataTypes.STRING,
        email:DataTypes.STRING,
        phone:DataTypes.STRING,
        address_one: DataTypes.STRING,
        address_two: DataTypes.STRING,
        status:DataTypes.BOOLEAN  
    },
    {
        freezeTableName: true,
        
    });

  

    return Client;

};
