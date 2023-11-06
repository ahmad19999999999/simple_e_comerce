


const { models: {User} } = require('../../models');
const bcrypt=require('bcrypt');
const validationSchema = require('../../validation/user');

module.exports = {

    create: async (req, res) => {

        
         

            const {username,email,password,phone,type_user,status} = req.body;
            const { error } = validationSchema.validate(req.body);

            if (error) {
              
              return res.status(400).json({ error: error.details[0].message });
            }

          const user=  await  User.create({
              username,
                email,
                password,
                phone,
                type_user,
                status
            });
            
            // const salt=await bcrypt.genSalt(10);
            // user.password=await bcrypt.hash(user.password,salt);
            // await user.save();
             res.status(201).send(user);
            
              
        } 
    }
