// Import important parts of Sequelize library
const { Model, DataTypes } = require('sequelize');

// Import our database connection from config.js
const sequelize = require('../config/connection.js');

// Initialize Tag model (table) by extending off Sequelize's Model class
class Tag extends Model {}

// Set up fields and rules for Product model
Tag.init(
  {
    // define columns
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
