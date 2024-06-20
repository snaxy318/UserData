// roleRoutes.js
const express = require('express');
const router = express.Router();
const roleController = require('../controllers/roleController');

// GET all roles
router.get('/', roleController.getRoles);

// GET role by ID
router.get('/:id', roleController.getRoleById);

// POST create a new role
router.post('/', roleController.createRole);

// DELETE role by ID
router.delete('/:id', roleController.deleteRole);

module.exports = router;
