


const { models: { Product, Categories } } = require('../../models');
const validationSchema = require('../../validation/product');

module.exports = {
  create: async (req, res) => {
    try {
      const { name, slug, description, quantity, price, status, categoryIds } = req.body;
      const imageFilename = req.file.filename;

      const fetchedCategories = await Categories.findAll({ where: { id: categoryIds } });

      if (fetchedCategories.length !== categoryIds.length) {
        return res.status(404).send('Some categories do not exist.');
      }

      const { error } = validationSchema.validate(req.body);

      if (error) {
        // Handle validation error
        return res.status(400).json({ error: error.details[0].message });
      }

      const product = await Product.create({
        name,
        slug,
        description,
        quantity,
        price,
        image: imageFilename,
        status,
        categoryId: categoryIds
      });

      res.status(201).json(product);
    } catch (error) {
      console.error(error);
      res.status(500).json({
        status: 'error',
        message: 'Failed to add product',
      });
    }
  }
};