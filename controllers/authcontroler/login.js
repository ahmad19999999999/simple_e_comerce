
const { models: { User } } = require('../../models');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');
const config=require('../../config/config');
// ('jwtprivatkey')

module.exports = {
login:  async (req, res) => {
    try {
      
       const  user=await User.findOne({where: {username:req.body.username}});
       if(!user)return res.status(400).send('invalid username or password');
      const validpassword= bcrypt.compareSync(req.body.password, user.password);
      if(!validpassword)return res.status(400).send('invalid username or password');
    
      else {  const token= jwt.sign({id:user.id,type_user:user.type_user},config.secretKey);
       
    res.send([user,token]);
      
    }
    }
    catch (error) {
      res.status(500).json({
          status: "error",
          message: "faild to login",
        });
    
      
    }
}
}