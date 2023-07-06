
const authcontroler= {};
authcontroler.login= require('./login');
authcontroler.logout= require('./logout');
authcontroler.forget_password= require('./forget_password');
authcontroler.registre= require('./registre');
authcontroler.reset_password= require('./reset_password');



module.exports = authcontroler;