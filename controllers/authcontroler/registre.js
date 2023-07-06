
const { models: { User } } = require('../../models');
const jwt=require('jsonwebtoken');
const config=require('../../config/config');
const bcrypt=require('bcrypt');

module.exports = {
registre:  async (req, res) => {
    try {
      
       const  user=await User.findOne({where: {email:req.body.email}});
       if(user)return res.status(400).send('this email alradey exist ....');
     
      
        
        const { username, email, password, phone, type_user, status } = req.body;
       const newUser= await User.create({
            username,
            email,
            password,
            phone,
            type_user,
            status
          })
          const salt=await bcrypt.genSalt(10);
          newUser.password=await bcrypt.hash(newUser.password,salt);
            await newUser.save();
        
            const token= jwt.sign({id:newUser.id,type_user:newUser.type_user},config.secretKey);
             res.status(201).json({newUser,token});
        
    }
        catch (error) {
            res.status(500).json({
              status: 'error',
              message: 'Failed to registre',
            });
          }
        }
    }

