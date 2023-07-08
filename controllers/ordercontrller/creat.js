
const { models: { Orders } } = require('../../models');
const { models: { Product } } = require('../../models');
const { models: { Client } } = require('../../models');
const { models: { Order_item } } = require('../../models');
const generateOrderNumber = require('../../utils/order_number');
const { sequelize } = require('../../models');
const orderTransoform = require('../../transfrom/order')
//
module.exports = {
  //
  create: async (req, res) => {
    //
    try {
      //
      const { client, products } = req.body;
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

        if (client) {
          //
          fetchClient = await Client.create(client,
            { transaction: t }
          );
        }
        //
        const { order_note, type_delivery, delivery_charge } = req.body;
        //
        const order_number = generateOrderNumber();
        //
        const order = await Orders.create({
          order_number,
          order_total,
          order_note,
          type_delivery,
          delivery_charge,
          clienId: fetchClient.id
        },
          { transaction: t }
        );
        //
        for (const product of fetchedProducts) {
          //
          await Order_item.create(
            {
              orderId: order.id,
              productId: product.id,
              quantity: product.quantity,
              price: product.price
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