require('dotenv').config();
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const TokenMiddleware = {
  async verifyToken(token) {    
    try {
      const { data } = jwt.verify(token, secret);
      return data;
    } catch (error) {
      const err = new Error('Expired or invalid token');
      err.name = 'UnauthorizedError';
      throw err;
    }
  },
};

module.exports = TokenMiddleware;