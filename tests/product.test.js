const { DataTypes } = require('sequelize');
const sequelize = require('sequelize'); // Replace 'path/to/sequelize' with the actual path to your sequelize instance.
const ProductModel = require('../models'); // Replace 'path/to/product' with the actual path to your product model.

describe('Product Model', () => {
  // Mock the Product model
  const Product = ProductModel(sequelize, DataTypes);

  // Mock the queryInterface methods to avoid database interactions in tests
  const queryInterface = {
    createTable: jest.fn(),
  };

  // Mock the sequelize object
  const sequelizeMock = {
    define: jest.fn((modelName, attributes, options) => {
      return Product;
    }),
  };

  // Test the model definition
  it('should define the Product model', () => {
    // Call the module function with mocked arguments
    const productModel = ProductModel(sequelizeMock, DataTypes);

    // Assertions
    expect(sequelizeMock.define).toHaveBeenCalledTimes(1);
    expect(sequelizeMock.define).toHaveBeenCalledWith(
      'product',
      {
        name: DataTypes.STRING,
        slug: DataTypes.STRING,
        description: DataTypes.TEXT,
        quantity: DataTypes.INTEGER,
        price: DataTypes.DOUBLE,
        image: {
          type: DataTypes.STRING,
        },
        status: DataTypes.BOOLEAN,
      },
      {
        freezeTableName: true,
      }
    );

    // Additional assertions for the returned model object (if necessary)
    expect(productModel).toBeDefined();
    expect(productModel).toBe(Product);
  });

  // Add more test cases for your Product model here as needed.

});
