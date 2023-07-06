const express = require('express');
const controler=require('../controllers');
const router = express.Router();
const multer = require('multer');


const storage = multer.memoryStorage();

const upload = multer({ storage: storage });  



router.post('/',upload.single('image'),controler.categoriecontroller.creat.create);
router.get('/:id', controler.categoriecontroller.read.read);
router.delete('/:id', controler.categoriecontroller.delete.delete);
router.put('/:id', controler.categoriecontroller.update.update);



module.exports = router;