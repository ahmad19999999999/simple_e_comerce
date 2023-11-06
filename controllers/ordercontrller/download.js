const fs = require('fs');
const { models: { Orders } } = require('../../models');

module.exports = {
    download: async (req, res) => {
    
        try {
          const order = await Orders.findByPk(req.params.id);
    
          if (!order) {
             res.status(404).json({
              status: "fail",
              message: "order with that ID not found",
            });
          }
          fs.writeFileSync('order-info.txt',order );
          res.download('order-info.txt');
        } catch (error) {
          res.status(500).json({
            status: "error",
            message: error.message,
          });
        }
      }
    }