
const { models: { Categories } } = require('../../models');
 const sharp = require('sharp');
 


 module.exports = {
create: async (req, res) => {
        try {
    
          
           const { name, slug, image, status } = req.body;
        
     
    
           const { buffer } = req.file;
           const compressedImage = await sharp(buffer)
             .resize(640, 480)
            .jpeg({ quality: 50 })
           .toBuffer();
    
       const categories = await Categories.create({
             name,
             slug,
             image: compressedImage,
            status
    
    
    });
    
          res.status(201).json(categories);
         } catch (error) {
          res.status(500).json({
            status: false,
            message: "faild to add categorie",
           
                      });
          }
        }
    }