
const { models: { Orders } } = require('../../models');
const { models: {Product } } = require('../../models');
const { models: { Client } } = require('../../models');

module.exports = {
readall: async (req, res) => {

    try {
      const page = parseInt(req.query.page) || 1;
      const pageSize = parseInt(req.query.pageSize) || 5;
      const offset = (page - 1) * pageSize;

      let order = await Orders.findAndCountAll({
        offset,
        limit: pageSize,
        include: [Product ,Client]
      });

      if (!order) {
         res.status(404).json({
          status: "fail",
          message: "order not found",
        });

      }
      
        res.status(200).json(order);
      

    }

    catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });

    }




  }
}