const express = require('express');
const controler=require('../controllers');
const getNextStatus=require('../midelware/updatstatus');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const router = express.Router();

router.post('/', controler.ordercontrller.creat.create);
router.get('/:id', controler.ordercontrller.read.read);
router.get('/', controler.ordercontrller.readall.readall);
router.put('/:id', controler.ordercontrller.update.update);
router.put('/nextstatus/:id',getNextStatus,controler.ordercontrller.updatestatus.updateStatus);
router.delete('/:id', controler.ordercontrller.delete.delete);
router.get('/:id', controler.ordercontrller.download.download);






module.exports = router;