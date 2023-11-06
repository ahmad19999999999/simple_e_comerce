const { models: {Orders} } = require('../../models');

module.exports = {
  updateStatus: async (req, res) => {
    try {
      const { id } = req.params;
      const { nextStatus } = req; // Use the next status determined by the middleware

      const result = await Orders.update(
        { status: nextStatus },
        { where: { id } }
      );

      if (result[0] === 0) {
        return res.status(404).json({
          status: 'fail',
          message: 'Order with that ID not found',
        });
      }

      const order = await Orders.findByPk(id);

      res.status(200).json(order);
    } catch (error) {
      res.status(500).json({
        status: 'error',
        message: error.message,
      });
    }
  },
};