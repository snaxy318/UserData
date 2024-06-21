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
    allowNull: false,
    unique: {
      name: 'compositeIndex',
      msg: 'User and Role combination must be unique'
    }
  },
  roleid: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: {
      name: 'compositeIndex',
      msg: 'User and Role combination must be unique'
    }
  }
},{
  timestamps: false
  // indexes: [
  //   {
  //     unique: true,
  //     fields: ['userid', 'roleid']
  //   }
  // ]
});

module.exports = UserRoleMapper;
