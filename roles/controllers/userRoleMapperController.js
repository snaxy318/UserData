// controllers/userRoleMapperController.js
const userRoleMapperService = require('../services/userRoleMapperService');

const getAllUserRoleMappings = async (req, res) => {
  try {
    const userRoleMappings = await userRoleMapperService.getAllUserRoleMappings();
    res.status(200).json(userRoleMappings);
  } catch (error) {
    res.status(500).json({ error: `Error while fetching user-role mappings: ${error.message}` });
  }
};

const getUserRoleMappingById = async (req, res) => {
  try {
    const userRoleMapping = await userRoleMapperService.getUserRoleMappingById(req.params.id);
    if (userRoleMapping) {
      res.status(200).json(userRoleMapping);
    } else {
      res.status(404).json({ error: 'User-role mapping not found' });
    }
  } catch (error) {
    res.status(500).json({ error: `Error while fetching user-role mapping: ${error.message}` });
  }
};

const createUserRoleMappings = async (req, res) => {
  try {
    const { roleID, userID } = req.body;
    const newUserRoleMapping = await userRoleMapperService.createUserRoleMappings(roleID,userID);
    res.status(201).json(newUserRoleMapping);
  } catch (error) {
    res.status(500).json({ error: `Error while creating user-role mapping: ${error.message}` });
  }
};

const updateUserRoleMapping = async (req, res) => {
  try {
    const updatedUserRoleMapping = await userRoleMapperService.updateUserRoleMapping(req.params.id, req.body);
    res.status(200).json(updatedUserRoleMapping);
  } catch (error) {
    res.status(500).json({ error: `Error while updating user-role mapping: ${error.message}` });
  }
};

const deleteUserRoleMapping = async (req, res) => {
  try {
    await userRoleMapperService.deleteUserRoleMapping(req.params.id);
    res.status(204).json({ message: 'User-role mapping deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: `Error while deleting user-role mapping: ${error.message}` });
  }
};

module.exports = {
  getAllUserRoleMappings,
  getUserRoleMappingById,
  createUserRoleMappings,
  updateUserRoleMapping,
  deleteUserRoleMapping
};

