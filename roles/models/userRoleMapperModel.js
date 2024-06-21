// userRoleMapperModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const UserRoleMapper = sequelize.define('UserRoleMapper', {
  userRoleMapperId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  roleId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = UserRoleMapper;
