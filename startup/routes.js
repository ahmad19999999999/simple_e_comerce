const express = require('express');
const user =require('../routes/user');
const categories = require('../routes/categories');
const client = require('../routes/client');
const setting = require('../routes/setting');
const product = require('../routes/product');
const order = require('../routes/orders');
const orders = require('../routes/order_item');
const auth = require('../routes/auth');
const coupon = require('../routes/coupon');

const errorHandler=require('../midelware/errorhandled');

module.exports=function(app){
 app.use('/user',user);
app.use('/categories',categories);
app.use('/client',client);
app.use('/setting', setting);
app.use('/products', product );
app.use('/order',order);
app.use('/orders',orders);
app.use('/auth',auth);
app.use('/coupon',coupon);
app.use((err, req, res, next) => {
  errorHandler(err, req, res, next);
});


}