const express = require('express');
const controllers=require('../controllers');
const router = express.Router();

router.post('/',controllers.usercontroler.creat.create);
router.get('/:id' , controllers.usercontroler.read.read);
router.delete('/:id', controllers.usercontroler.delete.delete);
router.put('/:id',controllers.usercontroler.update.update);
router.get('/' , controllers.usercontroler.readall.readall);




module.exports =router ;


