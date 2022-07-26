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
    const user = await models.Category.create(body, { raw: true });
    return user;
  },

  async list() {
    const categories = await models.Category.findAll();
    return categories;
  },

};

module.exports = categoryService;