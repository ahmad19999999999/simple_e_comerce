


const { models: { User } } = require('../../models');
const bcrypt=require('bcrypt');


module.exports = {

    create: async (req, res) => {

        try {
         

            const { username,email,password,phone,type_user,status } = req.body;

          const user=  await  User.create({
                username,
                email,
                password,
                phone,
                type_user,
                status
            });
            
            const salt=await bcrypt.genSalt(10);
            user.password=await bcrypt.hash(user.password,salt);
            await user.save();
             res.status(201).send(user);
            
              
        } catch(error){
          res.status(500).json({
            status: "error",
            message: "faild to add user",
          });
        }
    }
}