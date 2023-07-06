
const { models: { User } } = require('../../models');

module.exports = {
read: async (req, res) => {
    
    try {
      const user = await User.findByPk(req.params.id, {attributes: [ 'username','email','phone','type_user','status']});
      if (!user) {
        res.status(404).json({
          status: "fail",
          message: "user with that ID not found",
        });
      }
  
      res.status(200).send(user)
        
      
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  }
}