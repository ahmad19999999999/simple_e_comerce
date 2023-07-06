const ordercontrller= {};

ordercontrller.creat= require('./creat');
ordercontrller.read= require('./read');
ordercontrller.update= require('./update');
ordercontrller.delete= require('./delete');
ordercontrller.readall= require('./readall');

module.exports =ordercontrller;