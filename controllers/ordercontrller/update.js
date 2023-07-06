
const { models: { Orders } } = require('../../models');

module.exports = {
update: async (req, res) => {
    
    try {
      const result = await Orders.update(
        {
          where: {id: req.params.id,},
        }
      );

      if (!result) {
        res.status(404).json({
          status: "fail",
          message: " Order with that ID not found",
        });
      }

      const order = await Orders.findByPk(req.params.id);

      res.status(200).json(order);
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  }
}