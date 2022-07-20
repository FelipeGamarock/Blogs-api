const Joi = require('joi');
const jwt = require('jsonwebtoken');
const models = require('../database/models');
require('dotenv').config();

const secret = process.env.JWT_SECRET || 'secret';

const userService = {
  async validateBodyAdd(unknown) {
    const schema = Joi.object({
      displayName: Joi.string().required().min(8).max(255),
      email: Joi.string().required().email().max(255),
      password: Joi.string().required().min(6).max(255),
      image: Joi.string().required().max(255),
    });
    const result = await schema.validateAsync(unknown);
    return result;
  },

  async add(data) {
    const { email } = data;
    const userAlreadyExist = await models.User.findOne({
      where: { email },
      raw: true,
    });
    if (userAlreadyExist) {
      const err = new Error('User already registered');
      err.name = 'UserAlreadyExistsError';
      throw err;
    }
    const user = await models.User.create(data, { raw: true });
    return user;
  },

  async makeToken(data) {
    const { displayName, email, image } = data;
    const payload = { data: { displayName, email, image } };
    const token = jwt.sign(payload, secret);
    return token;
  },
};

module.exports = userService;