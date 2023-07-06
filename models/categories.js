
module.exports = (sequelize, DataTypes) => {

    const Categories = sequelize.define('categories', 
    {

        name: DataTypes.STRING,
        slug: DataTypes.STRING,
        image: {
            type: DataTypes.BLOB('long'),
            allowNull:false,
          },
       status:DataTypes.BOOLEAN ,
       
        

    },
    {
        freezeTableName: true
    });
   
   
    return Categories;

};