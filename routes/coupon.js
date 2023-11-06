const express = require('express');
const controler=require('../controllers');
const router = express.Router();

router.post('/',controler.couponcontroller.creat.create);
// router.get('/:id', controler.couponcontroller.read);
// router.delete('/:id', controler.couponcontroller.delete);
// router.put('/:id', controler.couponcontroller.update);



module.exports = router;