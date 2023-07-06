

const { models: {Product} } = require('../../models');

module.exports = {
update:async (req, res) => {
    try {
const result = await Product.update(
    req.body,
  {
    where: {
      id: req.params.id,
    }
  }
);

if (!result) {
  return res.status(404).json({
    status: "fail",
    message: "product with that ID not found",
  });
}

const newproduct = await  Product.findByPk(req.params.id);
res.status(200).json(newproduct);
} catch (error) {
res.status(500).json({
  status: "error",
  message: error.message,
});
}
}
}