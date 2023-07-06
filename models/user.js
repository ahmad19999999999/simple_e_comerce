

module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define('user', 
    {
      
        username: DataTypes.STRING,
        email:DataTypes.STRING,
        password: DataTypes.STRING,
        phone:DataTypes.STRING,
        type_user:DataTypes.INTEGER ,
        status:DataTypes.BOOLEAN  
    },
    
    {
        freezeTableName: true
    });


 

  

    return User;

};
