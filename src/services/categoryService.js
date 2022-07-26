const Joi = require('joi');
const models = require('../database/models');

const categoryService = {
  
  async validateBodyAdd(unknown) {
    const schema = Joi.object({
      name: Joi.string().required(),
    });
    const result = await schema.validateAsync(unknown);
    return result;
  },

  async add(body) {
    const user = await models.Categories.create(body);
    return user;
  },

  async list() {
    const categories = await models.Categories.findAll({ raw: true });
    return categories;
  },

};

module.exports = categoryService;