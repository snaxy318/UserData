// userRoleMapperModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const UserRoleMapper = sequelize.define('userrolemapper', {
  userrolemapperid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  userid: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  roleid: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
},{
  timestamps: false,
  indexes: [
    {
      unique: true,
      fields: ['userid', 'roleid']
    }
  ]
});

module.exports = UserRoleMapper;
