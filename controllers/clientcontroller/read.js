
const { models: { Client } } = require('../../models');
module.exports = {

read:  async (req, res) => {
    
    try {
      const client = await Client.findByPk(req.params.id);
  
      if (!client ) {
         res.status(404).json({
          status: "fail",
          message: "Client with that ID not found",
        });
      }
  
      res.status(200).json( client  );  
      
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  }
}