
const { models: { User } } = require('../../models');


module.exports = {
update:async (req, res) => {
    try {
const result = await User.update(
  {
    where: {
      id: req.params.id,
    },
  }
);

if (!result) {
  res.status(404).json({
    status: "fail",
    message: "user with that ID not found",
  });
}

const user = await User.findByPk(req.params.id);

res.status(200).json(user);
} catch (error) {
res.status(500).json({
  status: "error",
  message: error.message,
});
}
}
}