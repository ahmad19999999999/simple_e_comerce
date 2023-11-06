
const { models: { Categories } } = require('../../models');
const validationSchema = require('../../validation/categorie');
 
 


 module.exports = {
create: async (req, res) => {
        try {
    
          
           const { name, slug, status } = req.body;
        
           const imageFilename = req.file.filename;
           
           const { error } = validationSchema.validate(req.body);

      if (error) {
        // Handle validation error
        return res.status(400).json({ error: error.details[0].message });
      }

    
           
       const categories = await Categories.create({
             name,
             slug,
             image:imageFilename,
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