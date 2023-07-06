


const { models: { Client } } = require('../../models');
module.exports = {
update:async (req, res) => {
    try {
const result = await Client.update(
  {
    where: {
      id: req.params.id,
    }
  }
);

if (!result) {
  return res.status(404).json({
    status: "fail",
    message: "Client with that ID not found",
  });
}
const client = await Client.findByPk(req.params.id);
res.status(200).json(client);
} catch (error) {
res.status(500).json({
  status: "error",
  message: error.message,
});
}
}
}
