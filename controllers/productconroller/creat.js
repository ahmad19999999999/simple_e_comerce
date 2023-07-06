



const { models: {Product} } = require('../../models');
const { models: {Categories} } = require('../../models');





module.exports = {


  create: async (req, res) => {
    try {
      const { name, slug, description, quantity, price, status, categoryIds } = req.body;
      const imagePath = req.file.path;
    
  
      const fetchedCategories = await Categories.findAll({ where: { id: categoryIds } });
  
      if (!fetchedCategories) {
        return res.status(404).send('Some categories do not exist.');
      }
  
      const product = await Product.create({
        name,
        slug,
        description,
        quantity,
        price,
        image: imagePath,
        status,
        categoryId: categoryIds
      });
  
      res.status(201).json(product);
    } catch (error) {
      console.error(error);
      res.status(500).json({
        status: "error",
        message: "Failed to add product",
      });
    }
  }
}