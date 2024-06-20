// roleController.js
const roleService = require('../services/roleService');

const getRoles = async (req, res) => {
  try {
    const roles = await roleService.getAllRoles();
    res.json(roles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getRoleById = async (req, res) => {
  const roleId = req.params.id;
  try {
    const role = await roleService.getRoleById(roleId);
    res.json(role);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createRole = async (req, res) => {
  const roleData = req.body;
  try {
    const newRole = await roleService.createRole(roleData);
    res.status(201).json(newRole);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteRole = async (req, res) => {
  const roleId = req.params.id;
  try {
    await roleService.deleteRole(roleId);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getRoles,
  getRoleById,
  createRole,
  deleteRole
};
