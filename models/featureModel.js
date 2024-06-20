// featureModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Feature = sequelize.define('features', {
  featureid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  Name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT
  }
},
{
  timestamps: false
  });

module.exports = Feature;
