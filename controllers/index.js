const controllers = {};

controllers.usercontroler= require('./usercontroler');
controllers.settingcontroller = require('./settingcontroller');
controllers.categoriecontroller= require('./categoriecontroller');
controllers.clientcontroller = require('./clientcontroller');
controllers.productconroller= require('./productconroller');
controllers.ordercontrller = require('./ordercontrller');
controllers.order_productcontroller = require('./order_productcontroller');
controllers.authcontroler= require('./authcontroler');
module.exports = controllers;