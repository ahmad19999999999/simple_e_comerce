const fs = require('fs');
const path = require('path');
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

      // const imagePath = product.image;

      // Check if the image file exists
      // if (!fs.existsSync(imagePath)) {
      //   return res.status(404).json({
      //     status: "fail",
      //     message: "Image not found",
      //   });
      // }


      // Send the image file as the response
//fs.createReadStream(imagePath).pipe(res);
res.send(product);
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  }
};