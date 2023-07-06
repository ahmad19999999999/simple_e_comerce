const express = require('express');
const controler=require('../controllers');
const auth = require('../midelware/auth');
const router = express.Router();

router.post('/',controler.settingcontroller.creat.create);
router.get('/:id', controler.settingcontroller.read.read);
router.delete('/:id', controler.settingcontroller.delete.delete);
router.put('/:id', controler.settingcontroller.update.update);



module.exports = router;