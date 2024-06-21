// services/featureRoleMappingService.js
const FeatureRoleMapper = require('../models/featureRoleMappingModel');

const getAllFeatureRoleMapping = async () => {
  try {
    console.log("hello there");
    return await FeatureRoleMapper.findAll();
  } catch (error) {
    throw new Error(`Error while fetching user-role mappings: ${error.message}`);
  }
};

const getFeatureRoleMappingById = async (id) => {
  try {
    return await FeatureRoleMapper.findByPk(id);
  } catch (error) {
    throw new Error(`Error while fetching user-role mapping: ${error.message}`);
  }
};

const createFeatureRoleMapping = async (roleIDs, featureID) => {
  try {
    const  featureRoleMappings = roleIDs.map(roleID => ({ featureid:featureID, roleid:roleID }));
    const result = await Promise.all(featureRoleMappings.map(mapping =>
      FeatureRoleMapper.upsert(mapping)
    ));

  return result;
  } catch (error) {
    throw new Error(`Error while creating user-role mappings: ${error.message}`);
  }
};

const updateFeatureRoleMapping = async (id, featureRoleMappingData) => {
  try {
    const featureRoleMapping = await FeatureRoleMapper.findByPk(id);
    if (featureRoleMapping) {
      return await featureRoleMapping.update(featureRoleMappingData);
    }
    throw new Error('User-role mapping not found');
  } catch (error) {
    throw new Error(`Error while updating user-role mapping: ${error.message}`);
  }
};

const deleteFeatureRoleMapping = async (id) => {
  try {
    const featureRoleMapping = await FeatureRoleMapper.findByPk(id);
    if (featureRoleMapping) {
      return await featureRoleMapping.destroy();
    }
    throw new Error('User-role mapping not found');
  } catch (error) {
    throw new Error(`Error while deleting user-role mapping: ${error.message}`);
  }
};

module.exports = {
  getAllFeatureRoleMapping,
  getFeatureRoleMappingById,
  createFeatureRoleMapping,
  updateFeatureRoleMapping,
  deleteFeatureRoleMapping
};
