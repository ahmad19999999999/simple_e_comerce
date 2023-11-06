'use strict';


const { faker } = require('@faker-js/faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const numberOfProducts = 10; // Number of fake products you want to create

    const productsData = [...Array(numberOfProducts)].map(() => ({
      name: faker.commerce.productName(),
      slug: faker.lorem.slug(),
      description: faker.commerce.productDescription(),
      quantity:faker.seed(20),
      price: faker.commerce.price(),
      image: faker.image.url('https://picsum.photos/200/300'),
      status: faker.number.bigInt(1),
      createdAt: new Date(),
      updatedAt: new Date(),
      categorieId:faker.seed(40) // Assuming you have 5 categories with IDs from 1 to 5
    }));

    await queryInterface.bulkInsert('Products', productsData, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
