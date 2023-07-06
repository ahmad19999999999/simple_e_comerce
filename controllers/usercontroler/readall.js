


const { models: { User } } = require('../../models');

module.exports = {
readall:  async (req, res) => {
    
    try {
      const page = parseInt(req.query.page) || 1;
      const pageSize = parseInt(req.query.pageSize) || 5;
      const offset = (page - 1) * pageSize;
  
      let user=await User.findAndCountAll( {offset,
        limit: pageSize, attributes: [ 'username','email','phone','type_user','status']
        });
  
      if(!user){
         res.status(404).json({
          status: "fail",
          message: "user not found",
        });
  
      }
        res.status(200).json(user);
    
    }
  
  catch(error){
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  
  }
}
}