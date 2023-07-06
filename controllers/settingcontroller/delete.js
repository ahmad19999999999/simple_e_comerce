

const { models: { Setting } } = require('../../models');


module.exports = {
delete:async (req, res) => {
       
    try {
      const result = await Setting.destroy({
        where: { id: req.params.id },
        
      });
  
      if (!result ) {
        return res.status(404).json({
          status: "fail",
          message: "setting with that ID not found",
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