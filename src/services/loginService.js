const Joi = require('joi');
const jwt = require('jsonwebtoken');
const models = require('../database/models');
require('dotenv').config();

const secret = process.env.JWT_SECRET || 'secret';

const validateBodyLogin = async (unknown) => {
  const schema = Joi.object({
    email: Joi.string().required().email().max(255),
    password: Joi.string().required().max(255),
  }).messages({
    'string.empty': 'Some required fields are missing',
    'any.required': 'Some required fields are missing',
  });
  const result = await schema.validateAsync(unknown);
  return result;
};

const getByEmailOrThrows = async (email) => {
  const user = await models.User.findOne({
    where: { email },
    raw: true,
  });
  if (!user) {
    const err = new Error('Invalid fields');
    err.name = 'ValidationError';
    throw err;
  }
  return user;
};

const makeToken = async (user) => {
  const { id, name } = user;
  const payload = { data: { id, name } };
  const token = jwt.sign(payload, secret);
  return token;
};

module.exports = { validateBodyLogin, getByEmailOrThrows, makeToken };