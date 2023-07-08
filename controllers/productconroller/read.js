
const { models: { Product } } = require('../../models');

module.exports = {
  read: async (req, res) => {
    try {
      const product = await Product.findByPk(req.params.id);

      if (!product || !product.image) {
        return res.status(404).json({
          status: "fail",
          message: "Product with that ID not found or image path not available",
        });
      }
      const imagePath = `${req.protocol}://${req.get('host')}/uploads/product/image/${product.image}`;
      const productWithImagePath = { ...product.toJSON(), imagePath };
  
      return res.status(200).json({ product: productWithImagePath });

    
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  }
};