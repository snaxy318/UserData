// featureRoutes.js
const express = require('express');
const router = express.Router();
const featureController = require('../controllers/featureController');

// GET all features
router.get('/', featureController.getFeatures);

// GET feature by ID
router.get('/:id', featureController.getFeatureById);

// POST create a new feature
router.post('/', featureController.createFeature);

// DELETE feature by ID
router.delete('/:id', featureController.deleteFeature);

module.exports = router;
