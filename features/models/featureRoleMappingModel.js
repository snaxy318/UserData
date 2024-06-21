// featureRoleMappingModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');
const Role = require('../../roles/models/roleModel');
const Feature = require('../../features/models/featureModel');

const FeatureRoleMapping = sequelize.define('featurerolemapping', {
  featurerolemappingid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  featureid: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  roleid: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
},{
  timestamps: false,
  indexes: [
    {
      unique: true,
      fields: ['featureid', 'roleid']
    }
  ]
});

FeatureRoleMapping.belongsTo(Feature, { foreignKey: 'featureid' });
FeatureRoleMapping.belongsTo(Role, { foreignKey: 'roleid' });

module.exports = FeatureRoleMapping;
