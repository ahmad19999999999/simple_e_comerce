'use strict';

const { faker } = require('@faker-js/faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const numberOfCategories = 5; // Number of fake categories you want to create

    const categoriesData = [...Array(numberOfCategories)].map(() => ({
      name: faker.commerce.department(),
      slug: faker.lorem.slug(),
      image: faker.image.url('https://picsum.photos/200/300'),
      status: faker.number.bigInt(1),
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    await queryInterface.bulkInsert('Categories', categoriesData, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
