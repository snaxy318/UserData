// userController.js
const userService = require('../services/userService');

const getUsers = async (req, res) => {
  try {
    console.log("IN Here...");
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (error) {
    //console.log(error);
    res.status(500).json({ error: error.message });
  }
};

const getUserById = async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await userService.getUserById(userId);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUserWithCredentials = async (req, res) => {
  const userId = req.params.userId;

  try {
    const user = await userService.getUserWithCredentials(userId);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const register = async (req, res) => {
  const { email, mobile, password, firstName, lastName, userTypeId } = req.body;

  if (!email || !password || !firstName || !lastName || !userTypeId) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    // Register user
    const newUser = await userService.registerUser({
      email,
      mobile,
      password,
      firstName,
      lastName,
      userTypeId
    });

    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: `Error while registering user: ${error.message}` });
  }
};


const deleteUser = async (req, res) => {
  const userId = req.params.id;
  try {
    await userService.deleteUser(userId);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getUsers,
  getUserById,
  getUserWithCredentials,
  register,
  deleteUser
};