const sequelize = require('sequelize');
const { DataTypes } = require('sequelize');

/** @type {import('sequelize').ModelAttributes} */
const attributes = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    type: DataTypes.STRING
  }
};

module.exports = (sequelize) => {
  const categories = sequelize.define('Category', attributes, { tableName: 'Categories' });
  categories.associate = (models) => {
    categories.hasMany(models.PostCategory, { key: 'categoryId', as: 'PostCategories' });
  };
  return categories;
}