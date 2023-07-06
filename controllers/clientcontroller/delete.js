

const { models: { Client } } = require('../../models');
module.exports = {
delete: async (req, res) => {
       
    try {
      const result = await Client.destroy({
        where: { id: req.params.id },
        force: true,
      });
  
      if (result === 0) {
        return res.status(404).json({
          status: "fail",
          message: "Client with that ID not found",
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