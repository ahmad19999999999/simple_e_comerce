
const { models: { Orders } } = require('../../models');
const { models: { Product } } = require('../../models');
const { models: { Client } } = require('../../models');
const { models: { Order_item } } = require('../../models');
const generateOrderNumber = require('../../utils/order_number');
const { sequelize } = require('../../models');

module.exports = {
  create: async (req, res) => {
    try {
      const { clients, products } = req.body;

      await sequelize.transaction(async (t) => {
        const fetchedProducts = await Product.findAll({
          where: { id: products.map(p => p.id) },
          transaction: t
        });

        let order_total = 0;

        fetchedProducts.forEach((product) => {
          const productData = products.find(p => p.id === product.id);
          order_total += productData.quantity * product.price;
        });

        console.log('Fetched Products:', fetchedProducts);
        console.log('Order Total:', order_total);

        let fetchClient = await Client.findOne({ where: { id: clients.map(p => p.id) } });

        if (!fetchClient) {
          fetchClient = await Client.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            phone: req.body.phone,
            address_one: req.body.address_one,
            address_two: req.body.address_two,
          },
            { transaction: t }
          );

          console.log('Created Client:', fetchClient);
        }

        const { order_note, type_delivery, delivery_charge } = req.body;
       const order_number=generateOrderNumber();

        const order = await Orders.create({
          order_number,
          order_total,
          order_note,
          type_delivery,
          delivery_charge,
          clienId:fetchClient.id
        },
          { transaction: t }
        );

      

        console.log('Order:', order);

        for (const product of fetchedProducts) {
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

        for (const product of fetchedProducts) {
          const productData = products.find(p => p.id === product.id);
          const newQuantity = product.quantity - productData.quantity;

          // Save the updated product
          await product.update({ quantity: newQuantity }, { transaction: t });
        }
      

        res.status(201).json({fetchedProducts, fetchClient, order});
        console.log('Client ID:', fetchClient.id);
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to create order' });
    }
  }
};