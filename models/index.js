const dbConfig = require('../config/db-config');
const Sequelize = require('sequelize');


const sequelize = new Sequelize(dbConfig.DATABASE, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.DIALECT
});

const db = {};
db.sequelize = sequelize;
db.models = {};

db.models.User = require('./user')(sequelize, Sequelize.DataTypes );
db.models.Categories = require('./categories')(sequelize, Sequelize.DataTypes);
db.models.Product = require('./product')(sequelize, Sequelize.DataTypes);
db.models.Client = require('./client')(sequelize, Sequelize.DataTypes);
db.models.Orders = require('./orders')(sequelize, Sequelize.DataTypes);
db.models.Order_item = require('./order_item')(sequelize, Sequelize.DataTypes);
db.models.Setting = require('./setting')(sequelize, Sequelize.DataTypes);

const t = sequelize.transaction();


db.models.Orders.belongsToMany(db.models.Product,{through:db.models.Order_item});
db.models.Product.belongsToMany(db.models.Orders,{through:db.models.Order_item});
db.models.Product.belongsToMany(db.models.Orders, { through: db.models.Order_item, uniqueKey: 'unique' });

db.models.Client.hasMany(db.models.Orders);
db.models.Orders.belongsTo(db.models.Client);

db.models.Categories.hasMany(db.models.Product);
db.models.Product.belongsTo(db.models.Categories);


 

module.exports =db;