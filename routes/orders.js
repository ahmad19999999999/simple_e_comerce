const express = require('express');
const controler=require('../controllers');
const router = express.Router();

router.post('/', controler.ordercontrller.creat.create);
router.get('/:id', controler.ordercontrller.read.read);
router.delete('/:id', controler.ordercontrller.delete.delete);
router.put('/:id', controler.ordercontrller.update.update);
router.get('/', controler.ordercontrller.readall.readall);





module.exports = router;