// userService.js
const bcrypt = require('bcrypt');
const User = require('../models/userModel');
const UserCredential = require('../models/userCredentialModel');
const sequelize = require('../../config/database');


const getAllUsers = async () => {
  try {
    console.log("Hello there by");
    const users = await User.findAll();
    return users;
  } catch (error) {
    console.log(error);
    throw new Error(`Error while fetching users: ${error.message}`);
  }
};

const getUserWithCredentials = async (userId) => {
  try {
    const user = await User.findByPk(userId, {
      include: UserCredential // Include UserCredential details
    });
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  } catch (error) {
    console.log(error);
    throw new Error(`Error while fetching user with credentials: ${error.message}`);
  }
};

const getUserById = async (userId) => {
  try {
    const user = await User.findByPk(userId);
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  } catch (error) {
    throw new Error(`Error while fetching user: ${error.message}`);
  }
};

const registerUser = async (userData) => {
  const { firstName, lastName, email, password, mobile,userTypeId } = userData;

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    //get todays date
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var registrationDate = yyyy + '-' + mm + '-' + dd;
    console.log(registrationDate);

    // Create User in Users table
    const newUser = await User.create({ registrationdate:registrationDate, firstname:firstName, lastname:lastName, email ,usertypeid:userTypeId});
    console.log(newUser.dataValues.userid);

    // Create UserCredential in UserCredentials table
    const newUserCredential = await UserCredential.create({
      email,
      mobile,
      password: hashedPassword,
      userid: newUser.dataValues.userid // Associate with the newly created user
    });

    return { newUser, newUserCredential };
  } catch (error) {
    console.log(error.message);
    throw new Error(`Error while registering user: ${error.message}`);
  }
};

const deleteUser = async (userId) => {
  const transaction = await sequelize.transaction();

  try {
    // First delete the user credentials
    await UserCredential.destroy({
      where: { userid:userId },
      transaction
    });

    // Then delete the user
    await User.destroy({
      where: { userid:userId },
      transaction
    });

    await transaction.commit();
  } catch (error) {
    await transaction.rollback();
    throw error;
  }
};

module.exports = {
  getAllUsers,
  getUserWithCredentials,
  getUserById,
  registerUser,
  deleteUser
};
