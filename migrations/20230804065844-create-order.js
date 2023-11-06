'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      order_number: {
        type: Sequelize.STRING
      },
      order_total: {
        type: Sequelize.DOUBLE
      },
      order_note: {
        type: Sequelize.STRING
      },
      type_delivery: {
        type: Sequelize.STRING
      },
      delivery_charge: {
        type: Sequelize.DOUBLE
      },
      status: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      clientId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { 
          model: 'Clients',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      
    });

    
    
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Orders');
  }
};