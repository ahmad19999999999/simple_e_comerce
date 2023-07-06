const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/product/image'); // Set the destination folder for uploaded product images
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      const extension = path.extname(file.originalname);
      cb(null, file.fieldname + '-' + uniqueSuffix + extension); // Generate a unique filename for each uploaded file
    },
  });
  
  // Configure multer upload
  const uploads = multer({ storage });

  module.exports=uploads ;
  