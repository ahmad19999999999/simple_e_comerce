module.exports = (sequelize, DataTypes) => {

    const Setting = sequelize.define('setting', 
    {
      
        sitename: DataTypes.STRING,
        phone_one:DataTypes.STRING,
        phone_two: DataTypes.STRING,
        email_one:DataTypes.STRING,
        email_two:DataTypes.STRING,
        logo:DataTypes.STRING,
        favicon:DataTypes.STRING
    },
    {
        freezeTableName: true
    });
 

  

    return Setting;

};
