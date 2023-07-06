
const { models: { User } } = require('../../models');

module.exports = {
delete:async (req, res) => {
       
    try {
      const result = await User.destroy({
        where: { id: req.params.id }
        
      });
  
      if (!result) {
         res.status(404).json({
          status: "fail",
          message: "user with that ID not found",
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