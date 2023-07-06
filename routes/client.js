const express = require('express');
const controler=require('../controllers');
const router = express.Router();

router.post('/', controler.clientcontroller.creat.create);
router.get('/:id', controler.clientcontroller.read.read);
router.delete('/:id', controler.clientcontroller.delete.delete);
router.put('/:id', controler.clientcontroller.update.update);



module.exports = router;