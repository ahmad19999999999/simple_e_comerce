

const Sequelize = require('sequelize');
const sequelize=require('../config/config');

const db = {};
db.sequelize = sequelize;
db.models = {};

db.models.User = require('./user')(sequelize, Sequelize.DataTypes );
db.models.Categories = require('./categories')(sequelize, Sequelize.DataTypes);
db.models.Product = require('./product')(sequelize, Sequelize.DataTypes);
db.models.Client = require('./client')(sequelize, Sequelize.DataTypes);
db.models.Orders = require('./order')(sequelize, Sequelize.DataTypes);
db.models.Order_item = require('./order_item')(sequelize, Sequelize.DataTypes);
db.models.Setting = require('./setting')(sequelize, Sequelize.DataTypes);
db.models.Roles=require('./roles')(sequelize, Sequelize.DataTypes);
db.models.Permision=require('./permisions')(sequelize, Sequelize.DataTypes);
db.models.UserRoles=require('./user_roles')(sequelize, Sequelize.DataTypes);
db.models.UserPermisions=require('./user_permision')(sequelize, Sequelize.DataTypes);
db.models.Coupons=require('./coupon')(sequelize, Sequelize.DataTypes);


db.models.Orders.belongsToMany(db.models.Product,{through:db.models.Order_item});
db.models.Product.belongsToMany(db.models.Orders,{through:db.models.Order_item});
db.models.Product.belongsToMany(db.models.Orders, { through: db.models.Order_item, uniqueKey: 'unique' });

db.models.Client.hasMany(db.models.Orders);
db.models.Orders.belongsTo(db.models.Client);

db.models.Categories.hasMany(db.models.Product);
db.models.Product.belongsTo(db.models.Categories);

db.models.User.belongsToMany(db.models.Permision,{through:db.models.UserPermisions});
db.models.Permision.belongsToMany(db.models.User,{through:db.models.UserPermisions,uniqueKey: 'unique' });

db.models.User.belongsToMany(db.models.Roles,{through:db.models.UserRoles});
db.models.Roles.belongsToMany(db.models.User,{through:db.models.UserRoles,uniqueKey: 'unique' });

db.models.Coupons.hasMany(db.models.Orders);
db.models.Orders.belongsTo(db.models.Coupons);

module.exports =db;
