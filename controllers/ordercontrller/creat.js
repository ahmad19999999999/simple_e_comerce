
const { models: { Orders } } = require('../../models');
const { models: { Product } } = require('../../models');
const { models: { Client } } = require('../../models');
const { models: { Order_item } } = require('../../models');
const { models: {Coupons } } = require('../../models');
const generateOrderNumber = require('../../utils/order_number');
const { sequelize } = require('../../models');
const orderTransoform = require('../../transfrom/order');
const validationSchema = require('../../validation/order');

//
module.exports = {
  //
  create: async (req, res) => {
    //
    try {
      //
      const { client,products} = req.body;
      //
      await sequelize.transaction(async (t) => {
        //
        const fetchedProducts = await Product.findAll({
          where: { id: products.map(p => p.id) },
          transaction: t
        });
        //
        let order_total = 0;
        //
        fetchedProducts.forEach((product) => {
          //
          const productData = products.find(p => p.id === product.id);
          //
          order_total += productData.quantity * product.price;
          
    
        });

    
       

          //
          fetchClient = await Client.create(client,
            { transaction: t }
          );
        
        //
      
    
       const couponcod=await Coupons.findOne({where:{couponcode:req.body.couponcode}});
        if (!couponcod) {
          return res.status(400).json({ message: 'Invalid coupon code.' });
        }
        const currentDate = new Date();
        if (currentDate < couponcod.startdate || currentDate > couponcod.enddate) {
          return res.status(400).json({ error: 'Coupon is not valid at this time' });
        }
        
        
        order_total=(1-couponcod.persantage)*order_total;
    
       
        const { order_note, type_delivery, delivery_charge,status } = req.body;
        //
        
        //
        const { error } =validationSchema.validate(req.body);

        if (error) {
          // Validation failed
          return res.status(400).json({ error: error.details[0].message });
        }
        const order_number = generateOrderNumber();
        const order = await Orders.create({
          order_number,
          order_total,
          order_note,
          type_delivery,
          delivery_charge,
          status,
          ClientId: fetchClient.id,
          CouponId: couponcod.id ? couponcod.id : null
        
        },
          { transaction: t }
        );
        await order.save();
        for (const product of fetchedProducts) {
          //
          await Order_item.create(
            {
              OrderId:order.id,
              ProductId:product.id,
              quantity:product.quantity,
              price:product.price
            },
            { transaction: t }
          );
        }
        //
        for (const product of fetchedProducts) {
          //
          const productData = products.find(p => p.id === product.id);
          //
          const newQuantity = product.quantity - productData.quantity;
          // Save the updated product
          await product.update({ quantity: newQuantity }, { transaction: t });
        }
        //
        res.status(201).json(orderTransoform(order, fetchClient, fetchedProducts));
      });
    } catch (error) {
      //
      console.error(error);
      //
      res.status(500).json({ error: 'Failed to create order' });
    }
  }
};