// services/userRoleMapperService.js
const UserRoleMapper = require('../models/userRoleMapperModel');

const getAllUserRoleMappings = async () => {
  try {
    return await UserRoleMapper.findAll();
  } catch (error) {
    throw new Error(`Error while fetching user-role mappings: ${error.message}`);
  }
};

const getUserRoleMappingById = async (id) => {
  try {
    return await UserRoleMapper.findByPk(id);
  } catch (error) {
    throw new Error(`Error while fetching user-role mapping: ${error.message}`);
  }
};

const createUserRoleMappings = async (roleID, userIDs) => {
  try {
    const userRoleMappings = userIDs.map(userID => ({ userid:userID, roleid:roleID }));
    const result = await Promise.all(userRoleMappings.map(mapping =>
      UserRoleMapper.upsert(mapping)
    ));

  return result;
  } catch (error) {
    throw new Error(`Error while creating user-role mappings: ${error.message}`);
  }
};

const updateUserRoleMapping = async (id, userRoleMappingData) => {
  try {
    const userRoleMapping = await UserRoleMapper.findByPk(id);
    if (userRoleMapping) {
      return await userRoleMapping.update(userRoleMappingData);
    }
    throw new Error('User-role mapping not found');
  } catch (error) {
    throw new Error(`Error while updating user-role mapping: ${error.message}`);
  }
};

const deleteUserRoleMapping = async (id) => {
  try {
    const userRoleMapping = await UserRoleMapper.findByPk(id);
    if (userRoleMapping) {
      return await userRoleMapping.destroy();
    }
    throw new Error('User-role mapping not found');
  } catch (error) {
    throw new Error(`Error while deleting user-role mapping: ${error.message}`);
  }
};

module.exports = {
  getAllUserRoleMappings,
  getUserRoleMappingById,
  createUserRoleMappings,
  updateUserRoleMapping,
  deleteUserRoleMapping
};
