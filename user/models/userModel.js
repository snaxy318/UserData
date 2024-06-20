// userModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');
const UserType = require('./userTypeModel');
const UserCredential = require('./userCredentialModel');

const User = sequelize.define('user', {
  userid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  registrationdate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  firstname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true // Ensure email is unique
  },
  usertypeid: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: UserType, // Reference to UserType model
      key: 'usertypeid' // Primary key in UserType table
    },
  }
},{
  tableName: 'users',
  timestamps: false
});

User.hasOne(UserCredential, { foreignKey: 'userid' });

module.exports = User;
