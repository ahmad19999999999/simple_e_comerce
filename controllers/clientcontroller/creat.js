const { models: { Client } } = require('../../models');

// const {validation:{client}} = require('../../validation');
module.exports = {

    create: async (req, res) => {
        try{
         
          const { error } = client.validate(req.body);

          if (error) {
            // Validation failed
            return res.status(400).json({ error: error.details[0].message });
          }
           
            const { firstname, lastname,email,phone,address_one,address_two,status} = req.body;
           
          const client=  await Client.create({
                firstname,
                lastname,
                email,
                phone,
                address_one,
                address_two,
                status
            });

            res.status(201).json(client);
        } catch(error){
          res.status(500).json({
            status: "error",
            message: "faild to add Client",
          });
        }
    }
}