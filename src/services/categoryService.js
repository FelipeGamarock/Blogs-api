const models = require('../database/models');

const categoryService = {

  async list() {
    const categories = await models.Category.findAll();
    return categories;
  },

};

module.exports = categoryService;