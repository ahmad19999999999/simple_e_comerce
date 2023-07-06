const express = require('express');
const controllers=require('../controllers');
const router = express.Router();


router.post('/login' , controllers.authcontroler.login.login);
router.delete('/logout/:id' , controllers.authcontroler.logout.logout);
router.post('/forgetpassword' , controllers.authcontroler.forget_password.forgetpassword);
router.post('/register' ,controllers.authcontroler.registre.registre);
router.post('/reset_password' , controllers.authcontroler.reset_password.reset_password);


module.exports =router ;