'use strict';


const { faker } = require('@faker-js/faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const numberOfOrders = 10; // Number of fake orders you want to create

    const ordersData = [...Array(numberOfOrders)].map(() => ({
      order_number: faker.string.alphanumeric(),
      order_total: faker.number.float(),
      order_note: faker.lorem.sentence(),
      type_delivery: faker.helpers.arrayElements(['desck','homes']),
      delivery_charge: faker.commerce.price({min:350,max:500}),
      status: faker.helpers.arrayElements(['Pending', 'Processing', 'Shipped', 'Delivered']),
      createdAt: new Date(),
      updatedAt: new Date(),
      clientId:faker.helpers.arrayElements([1, 2, 3, 4, 5,6,7,8,9,10], { min:1, max:10}), // Assuming you have 10 clients with IDs from 1 to 10
    }));

    await queryInterface.bulkInsert('Orders', ordersData, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Orders', null, {});
  }
};
