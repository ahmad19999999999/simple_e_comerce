const express = require('express');
const controler=require('../controllers');
const uploads = require('../midelware/upload');
const router = express.Router();




router.post('/:folderName',uploads.single('image'),controler.categoriecontroller.creat.create);
router.get('/:id', controler.categoriecontroller.read.read);
router.delete('/:id', controler.categoriecontroller.delete.delete);
router.put('/:id', controler.categoriecontroller.update.update);



module.exports = router;