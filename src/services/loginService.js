// const Joi = require('joi');
// const models = require('../database/models');

// const validateBodyAdd = async (unknown) => {
//   const schema = Joi.object({
//     email: Joi.string().required().email().max(255),
//     password: Joi.string().required().max(255),
//   });
//   const result = await schema.validateAsync(unknown);
//   return result;
// };

// const add = async (data) => {
//   const model = await models.user.create(data);
//   const newUser = model.JSON();
//   return newUser;
// };

// module.exports = { validateBodyAdd, add };