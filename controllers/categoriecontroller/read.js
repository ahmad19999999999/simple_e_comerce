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
  
      res.status(200).json(categorie);  
      
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  }
}