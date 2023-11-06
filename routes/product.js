const express = require('express');
const controler = require('../controllers/index');
const auth = require('../midelware/auth');
const admin = require('../midelware/admin');
const uploads = require('../midelware/upload');
const router = express.Router();





router.post('/:folderName', uploads.single('image'), controler.productconroller.creat.create);
router.get('/alert', controler.productconroller.alert_produdct.alert);
router.get('/:id', controler.productconroller.read.read);
router.delete('/:id', controler.productconroller.delete.delete);
router.put('/:id', controler.productconroller.update.update);
router.get('/', controler.productconroller.readall.readall);




module.exports = router;
