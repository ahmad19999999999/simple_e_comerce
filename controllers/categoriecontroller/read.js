const { models: { Categories  } } = require('../../models');
module.exports = {

read:  async (req, res) => {
    
    try {
      const categorie = await Categories.findByPk(req.params.id);
  
      if (!categorie ) {
         res.status(404).json({
          status: "fail",
          message: "categorie with that ID not found",
        });
      }
  
      const imagePath = `${req.protocol}://${req.get('host')}/uploads/product/image/${categorie.image}`;
      const categorieWithImagePath = { ...categorie.toJSON(), imagePath };
  
      return res.status(200).json({ categorie: categorieWithImagePath });
      
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  }
}