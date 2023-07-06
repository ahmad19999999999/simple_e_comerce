
const { models: { Order_item } } = require('../../models');




module.exports = {
read:  async (req, res) => {
    
    try {
      const order_item = await Order_item.findByPk(req.params.id);
      
  
      if (!order_item ) {
        return res.status(404).json({
          status: "fail",
          message: "Order_item with that ID not found",
        });
      }

    
      res.status(200).json(order_item);
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  }
}