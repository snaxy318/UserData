// controllers/featureRoleMapperController.js
const featureRoleMapperService = require('../services/featurRoleMappingService');

const getAllFeatureRoleMappings = async (req, res) => {
  try {
    console.log("hello there");
    const featureRoleMappings = await featureRoleMapperService.getAllFeatureRoleMapping();
    res.status(200).json(featureRoleMappings);
  } catch (error) {
    res.status(500).json({ error: `Error while fetching user-role mappings: ${error.message}` });
  }
};

const getFeatureRoleMappingById = async (req, res) => {
  try {
    const featureRoleMapping = await userRoleMapperService.getFeatureRoleMappingById(req.params.id);
    if (featureRoleMapping) {
      res.status(200).json(featureRoleMapping);
    } else {
      res.status(404).json({ error: 'User-role mapping not found' });
    }
  } catch (error) {
    res.status(500).json({ error: `Error while fetching user-role mapping: ${error.message}` });
  }
};

const createFeatureRoleMappings = async (req, res) => {
  try {
    const { roleID, featureID } = req.body;
    const newFeatureRoleMapping = await featureRoleMapperService.createFeatureRoleMapping(roleID,featureID);
    res.status(201).json(newFeatureRoleMapping);
  } catch (error) {
    res.status(500).json({ error: `Error while creating user-role mapping: ${error.message}` });
  }
};

const updateFeatureRoleMapping = async (req, res) => {
  try {
    const updatedFeatureRoleMapping = await featureRoleMapperService.updateFeatureRoleMapping(req.params.id, req.body);
    res.status(200).json(updatedFeatureRoleMapping);
  } catch (error) {
    res.status(500).json({ error: `Error while updating user-role mapping: ${error.message}` });
  }
};

const deleteFeatureRoleMapping = async (req, res) => {
  try {
    await featureRoleMapperService.deleteFeatureRoleMapping(req.params.id);
    res.status(204).json({ message: 'User-role mapping deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: `Error while deleting user-role mapping: ${error.message}` });
  }
};

module.exports = {
  getAllFeatureRoleMappings,
  getFeatureRoleMappingById,
  createFeatureRoleMappings,
  updateFeatureRoleMapping,
  deleteFeatureRoleMapping
};

