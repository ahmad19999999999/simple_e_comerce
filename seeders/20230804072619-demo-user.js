'use strict';


const { faker } = require('@faker-js/faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const numberOfUsers = 10; // Number of fake users you want to create

    const usersData = [...Array(numberOfUsers)].map(() => ({
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      phone: faker.phone.imei(),
      type_user: faker.helpers.arrayElements({min:1,max:2}), // Assuming you have 3 types of users
      status: faker.number.bigInt(1),
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    await queryInterface.bulkInsert('Users', usersData, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
