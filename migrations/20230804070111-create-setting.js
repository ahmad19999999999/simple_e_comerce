'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Settings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sitename: {
        type: Sequelize.STRING
      },
      phone_one: {
        type: Sequelize.STRING
      },
      phone_two: {
        type: Sequelize.STRING
      },
      email_one: {
        type: Sequelize.STRING
      },
      email_two: {
        type: Sequelize.STRING
      },
      logo: {
        type: Sequelize.STRING
      },
      favicon: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Settings');
  }
};