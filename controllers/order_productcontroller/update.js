const { models: { Order_item } } = require('../../models');




module.exports = {

update:async (req, res) => {
    try {
const result = await Order_item.update(
  
  {
    where: {
      id: req.params.id,
    },
  }
);

if (!result) {
  return res.status(404).json({
    status: "fail",
    message: "Order_item with that ID not found",
  });
}

const order_item= await Order_item.findByPk(req.params.id);

res.status(200).json({
  status: "success",
  data: {
    order_item
  },
});
} catch (error) {
res.status(500).json({
  status: "error",
  message: error.message,
});
}
}
}
