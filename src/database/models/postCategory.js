const sequelize = require('sequelize');
const { DataTypes } = require('sequelize');

/** @type {import('sequelize').ModelAttributes} */
const attributes = {
  postId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Users',
      key: 'id'
    }
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Categories',
      key: 'id'
    }
  }
};

module.exports = (sequelize) => {
  const PostCategories = sequelize.define('PostCategory', attributes, { tableName: 'PostCategories' });
  PostCategories.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'category',
      foreignKey: 'categoryId',
      otherKey: 'postId',
      through: 'PostCategory',
    });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'blogPost',
      foreignKey: 'postId',
      otherKey: 'categoryId',
      through: 'PostCategory',
    });
  };
  return PostCategories;
}