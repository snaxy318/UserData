// featureController.js
const featureService = require('../services/featureService');

const getFeatures = async (req, res) => {
  try {
    const features = await featureService.getAllFeatures();
    res.json(features);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getFeatureById = async (req, res) => {
  const featureId = req.params.id;
  try {
    const feature = await featureService.getFeatureById(featureId);
    res.json(feature);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createFeature = async (req, res) => {
  const featureData = req.body;
  try {
    const newFeature = await featureService.createFeature(featureData);
    res.status(201).json(newFeature);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteFeature = async (req, res) => {
  const featureId = req.params.id;
  try {
    await featureService.deleteFeature(featureId);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getFeatures,
  getFeatureById,
  createFeature,
  deleteFeature
};
