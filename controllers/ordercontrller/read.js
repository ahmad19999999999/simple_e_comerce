
const { models: { Orders } } = require('../../models');

module.exports = {
read: async (req, res) => {

    try {
      const order = await Orders.findByPk(req.params.id);

      if (!order) {
         res.status(404).json({
          status: "fail",
          message: "order with that ID not found",
        });
      }
      res.status(200).json(order);
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  }
}