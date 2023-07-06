
const { models: { Setting } } = require('../../models');


module.exports = {

    create: async (req, res) => {

        try{

         

           const { sitename, phone_one,phone_two,email_one,email_two,logo,favicon} = req.body;
           

          const setting=  await Setting.create({
                sitename,
                phone_one,
                phone_two,
                email_one,
                email_two,
                logo,
                favicon
            });

            res.status(201).json(setting);
        } catch(error) {
          res.status(500).json({
            status: "error",
            message: "faild to add setting",
          });
        }
    }
}