const { models: { Categories } } = require('../../models');
module.exports={

delete: async (req, res) => {

         try {
           const result = await Categories.destroy({
            where: { id: req.params.id },
               
          });
    
          if (result === 0) {
           return res.status(404).json({
               status: "fail",
               message: "Categories with that ID not found",
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