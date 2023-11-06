
const { models: {Coupons } } = require('../../models');


module.exports = {

    create: async (req, res) => {

        try{

           

          const coupon= await Coupons.create(req.body);

            res.status(201).json(coupon);
        } catch(error) {
          res.status(500).json({
            status: "error",
            message: "faild to add copon",
          });
        }
    }
}