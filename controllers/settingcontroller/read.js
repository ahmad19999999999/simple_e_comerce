
const { models: { Setting } } = require('../../models');


module.exports = {
read:  async (req, res) => {
    
    try {
      const setting = await Setting.findByPk(req.params.id);
  
      if (!setting ) {
        return res.status(404).json({
          status: "fail",
          message: "setting with that ID not found",
        });
      }
  
      res.status(200).json(setting);
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  }
}