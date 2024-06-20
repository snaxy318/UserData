// roleService.js
const Role = require('../models/roleModel');

const getAllRoles = async () => {
  try {
    const roles = await Role.findAll();
    return roles;
  } catch (error) {
    throw new Error(`Error while fetching roles: ${error.message}`);
  }
};

const getRoleById = async (roleId) => {
  try {
    const role = await Role.findByPk(roleId);
    if (!role) {
      throw new Error('Role not found');
    }
    return role;
  } catch (error) {
    throw new Error(`Error while fetching role: ${error.message}`);
  }
};

const createRole = async (roleData) => {
  const { name, description } = roleData;
  try {
    const newRole = await Role.create({ Name:name, description });
    return newRole;
  } catch (error) {
    throw new Error(`Error while creating role: ${error.message}`);
  }
};

const deleteRole = async (roleId) => {
  try {
    const role = await Role.findByPk(roleId);
    if (!role) {
      throw new Error('Role not found');
    }
    await role.destroy();
  } catch (error) {
    throw new Error(`Error while deleting role: ${error.message}`);
  }
};

module.exports = {
  getAllRoles,
  getRoleById,
  createRole,
  deleteRole
};
