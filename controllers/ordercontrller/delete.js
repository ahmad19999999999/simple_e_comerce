
const { models: { Orders } } = require('../../models');

module.exports = {

delete: async (req, res) => {

    try {
      const result = await Orders.destroy({
        where: { id: req.params.id },
        force: true,
      });

      if (!result) {
         res.status(404).json({
          status: "fail",
          message: " Order with that ID not found",
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
