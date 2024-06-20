// roleModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const Role = sequelize.define('roles', {
  roleid: {
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
},{
  timestamps: false
});

module.exports = Role;
