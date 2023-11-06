'use strict';

const { faker } = require('@faker-js/faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const numberOfClients = 10; // Number of fake clients you want to create

    const clientsData = [...Array(numberOfClients)].map(() => ({
      firstname: faker.person.firstName(),
      lastname: faker.person.lastName(),
      email: faker.internet.email(),
      phone: faker.phone.number(),
      adress_one: faker.location.streetAddress(),
      adress_two: faker.location.secondaryAddress(),
      status: faker.number.bigInt(1),
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    await queryInterface.bulkInsert('Clients',clientsData, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Clients', null, {});
  }
};
