// routes/userRoleMapperRoutes.js
const express = require('express');
const router = express.Router();
const userRoleMapperController = require('../controllers/userRoleMapperController');

router.get('/userRoleMappings', userRoleMapperController.getAllUserRoleMappings);
router.get('/userRoleMappings/:id', userRoleMapperController.getUserRoleMappingById);
router.post('/userRoleMappings', userRoleMapperController.createUserRoleMappings);
router.put('/userRoleMappings/:id', userRoleMapperController.updateUserRoleMapping);
router.delete('/userRoleMappings/:id', userRoleMapperController.deleteUserRoleMapping);

module.exports = router;