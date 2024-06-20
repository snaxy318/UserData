// userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// GET all users
router.get('/', userController.getUsers);

// GET user by ID
router.get('/:id', userController.getUserById);

// GET user with credentials by userId
router.get('/cred/:userId', userController.getUserWithCredentials);

// POST create a new user
router.post('/register', userController.register);

// DELETE user by ID
router.delete('/:id', userController.deleteUser);

module.exports = router;
