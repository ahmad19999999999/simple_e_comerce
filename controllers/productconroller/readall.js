
const { Op } = require("sequelize");
const { models: {Product} } = require('../../models');
const { models: { Categories } } = require('../../models');


module.exports = {

readall:  async (req, res) => {
    
  const filter = {};

  if (req.query.name) {
    filter.name = { [Op.like]: `%${req.query.name}%` };
  }

  if (req.query.status) {
    filter.status = req.query.status;
  }

  if (req.query.category) {
    filter['$Category.name$'] = req.query.category; // Filter by category name
  }

  if (req.query.minPrice && req.query.maxPrice) {
    filter.price = {
      [Op.between]: [parseFloat(req.query.minPrice), parseFloat(req.query.maxPrice)],
    };
  } else if (req.query.minPrice) {
    filter.price = {
      [Op.gte]: parseFloat(req.query.minPrice),
    };
  } else if (req.query.maxPrice) {
    filter.price = {
      [Op.lte]: parseFloat(req.query.maxPrice),
    };
  }

  const limit = parseInt(req.query.limit) || 10;
  const offset = parseInt(req.query.offset) || 0;

  try {
    const products = await Product.findAndCountAll({
      where: filter,
      limit: limit,
      offset: offset,
      include:Categories ,
    });
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
}