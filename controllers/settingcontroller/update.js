
const { models: { Setting } } = require('../../models');


module.exports = {
update:async (req, res) => {
    try {
const result = await Setting.update(
  
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

const setting= await Setting.findByPk(req.params.id);

res.status(200).json(setting);
} catch (error) {
res.status(500).json({
  status: "error",
  message: error.message,
});
}
}
  
  

}