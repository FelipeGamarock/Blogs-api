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
  displayName: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING,
    unique: true
  },
  password: {
    type: DataTypes.STRING
  },
  image: {
    type: DataTypes.STRING,
  },

};

module.exports = (sequelize) => {
  const users = sequelize.define('User', attributes, { tableName: 'Users', timestamps: false });
  users.associate = (models) => {
    users.hasMany(models.BlogPost, { key: 'userId', as: 'BlogPosts' });
  };
  return users;
}