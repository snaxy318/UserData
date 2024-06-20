const { Sequelize } = require('sequelize');
const env = require('dotenv');

env.config();

// Replace with your PostgreSQL database credentials
const sequelize = new Sequelize('UserData', 'postgres', process.env.POSTGRES_PASS, {
  host: 'localhost',
  dialect: 'postgres', // Use 'mysql' | 'sqlite' | 'postgres' | 'mssql' as per your database
  logging: false // Disable logging SQL queries to console
});

module.exports = sequelize;

