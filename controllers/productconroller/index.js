
const productconroller= {};

productconroller.creat= require('./creat');
productconroller.read= require('./read');
productconroller.alert_produdct = require('./alert_product')
productconroller.readall= require('./readall');
productconroller.update= require('./update');
productconroller.delete= require('./delete');


module.exports = productconroller;