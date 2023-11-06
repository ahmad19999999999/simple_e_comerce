
const multer = require('multer');
const fs = require('fs-extra');
const path = require('path');


// Define storage configuration for Multer
const storage = multer.diskStorage({
  destination: async (req, file, cb) => {
    const folderName = req.params.folderName;
    const destination = `uploads/${folderName}`;

    // Create the destination directory if it doesn't exist
    
    //await fs.ensureDir(destination);

    cb(null,destination);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const extension = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + extension);
  },
});

const uploads = multer({ storage });

module.exports = uploads;