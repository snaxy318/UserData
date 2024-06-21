// featureRoleMappingModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const FeatureRoleMapping = sequelize.define('FeatureRoleMapping', {
  featureRoleMappingId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  featureId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  roleId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = FeatureRoleMapping;
