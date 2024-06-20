// userCredentialModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');
const User = require('./userModel');

const UserCredential = sequelize.define('usercredential', {
  usercredentialid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  userid: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'User',
      key: 'userId'
    }
  },
  email: {  
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  mobile: {
    type: DataTypes.STRING,
    allowNull: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
},{
  tableName: 'usercredentials',
  timestamps: false
});

// Define foreign key relationship
//UserCredential.belongsTo(User, { foreignKey: 'userid' });

module.exports = UserCredential;
