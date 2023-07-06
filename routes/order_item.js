const express = require('express');
const controler=require('../controllers');
const router = express.Router();

router.post('/', controler.order_productcontroller.creat.create);
router.get('/:id', controler.order_productcontroller.read.read);
router.delete('/:id', controler.order_productcontroller.delete.delete);
router.put('/:id', controler.order_productcontroller.update.update);




module.exports = router;