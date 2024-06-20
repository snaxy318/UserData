// userTypeModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const UserType = sequelize.define('UserType', {
  usertypeid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  usertypename: {
    type: DataTypes.STRING,
    allowNull: false
  },
  usertypedescription: {
    type: DataTypes.TEXT
  }
},{
  tableName: 'usertype',
  timestamps: false
});

module.exports = UserType;
