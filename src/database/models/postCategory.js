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
  const PostCategories = sequelize.define('PostCategory', attributes, { tableName: 'PostCategories', timestamps: false });
  PostCategories.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      foreignKey: 'categoryId',
      otherKey: 'postId',
      through: PostCategories,
    });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'blogPost',
      foreignKey: 'postId',
      otherKey: 'categoryId',
      through: PostCategories,
    });
  };
  return PostCategories;
}