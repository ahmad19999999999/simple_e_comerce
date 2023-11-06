const { models: { Client } } = require('../../models');

//const validationSchema = require('../../validation/client');
module.exports = {

    create: async (req, res) => {
        try{
         
          // const { error } =validationSchema.validate(req.body);

          // if (error) {
          //   // Validation failed
          //   return res.status(400).json({ error: error.details[0].message });
          // }
           
          const client=  await Client.create(req.body);

            res.status(201).json(client);
        } catch(error){
          res.status(500).json({
            status: "error",
            message: "faild to add Client",
          });
        }
    }
}