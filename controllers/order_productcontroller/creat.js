
const { models: { Order_item } } = require('../../models');
const { models: {Product } } = require('../../models');
const { models: { Orders } } = require('../../models');




module.exports = {

    create: async (req, res) => {
        try{
          const { products } = req.body; // Assuming you have an array of product IDs and quantities in the request body
    
          // Fetch the products from the database using Sequelize
          const fetchedProducts = await Product.findAll({ where: { id: products.map(p => p.id) } });
          fetchedProducts.forEach((Product) => {
            
            quantity= Product.quantity 
            price= Product.price;
            productId=Product.id
          });
          const { orders } = req.body;
          const fetchedorders = await Orders.findAll({ where: { id:  orders.map(p => p.id) } });
          fetchedorders.forEach((Orders)=>{
            orderId=Orders.id
          })
          const order_item=  await  Order_item.create({
            quantity,
            price,
            productId,
            orderId 
          });

            res.status(201).json(order_item);
        } catch(error) {
          res.status(500).json({
            status: "error",
            message: "faild to add order_item",
          });
        }
    }
}