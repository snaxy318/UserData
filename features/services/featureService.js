// featureService.js
const Feature = require('../models/featureModel');

const getAllFeatures = async () => {
  try {
    const features = await Feature.findAll();
    return features;
  } catch (error) {
    throw new Error(`Error while fetching features: ${error.message}`);
  }
};

const getFeatureById = async (featureId) => {
  try {
    const feature = await Feature.findByPk(featureId);
    if (!feature) {
      throw new Error('Feature not found');
    }
    return feature;
  } catch (error) {
    throw new Error(`Error while fetching feature: ${error.message}`);
  }
};

const createFeature = async (featureData) => {
  const { name, description } = featureData;
  try {
    const newFeature = await Feature.create({ Name:name, description });
    return newFeature;
  } catch (error) {
    throw new Error(`Error while creating feature: ${error.message}`);
  }
};

const deleteFeature = async (featureId) => {
  try {
    const feature = await Feature.findByPk(featureId);
    if (!feature) {
      throw new Error('Feature not found');
    }
    await feature.destroy();
  } catch (error) {
    throw new Error(`Error while deleting feature: ${error.message}`);
  }
};

module.exports = {
  getAllFeatures,
  getFeatureById,
  createFeature,
  deleteFeature
};
