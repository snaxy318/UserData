// routes/userRoleMapperRoutes.js
const express = require('express');
const router = express.Router();
const featureRoleMapperController = require('../controllers/featureRoleMappingController');

router.get('/featureRoleMappings', featureRoleMapperController.getAllFeatureRoleMappings);
router.get('/featureRoleMappings/:id', featureRoleMapperController.getFeatureRoleMappingById);
router.post('/featureRoleMappings', featureRoleMapperController.createFeatureRoleMappings);
router.put('/featureRoleMappings/:id', featureRoleMapperController.updateFeatureRoleMapping);
router.delete('/featureRoleMappings/:id', featureRoleMapperController.deleteFeatureRoleMapping);

module.exports = router;