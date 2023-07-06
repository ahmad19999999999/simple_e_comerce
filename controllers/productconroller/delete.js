
const { models: {Product } } = require('../../models');

module.exports = {

delete:async (req, res) => {
       
    try {
      const result = await Product.destroy({
        where: { id: req.params.id },
      });
  
      if (!result) {
        return res.status(404).json({
          status: "fail",
          message: "product with that ID not found",
        });
      }
  
      res.status(204).json();
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  }
}