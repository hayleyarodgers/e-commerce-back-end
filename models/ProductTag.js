// Import important parts of Sequelize library
const { Model, DataTypes } = require('sequelize');

// Import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize ProductTag model (table) by extending off Sequelize's Model class
class ProductTag extends Model {}

// Set up fields and rules for Product model
ProductTag.init(
  {
    // define columns
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
