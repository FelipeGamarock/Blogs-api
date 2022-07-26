const categoryService = require('../services/categoryService');
const TokenMiddleware = require('../middlewares/tokenMiddleware');

const categoryController = {

  async add(req, res) {
    const token = req.headers.authorization;
    if (!token) {
      const err = new Error('Token not found');
      err.name = 'UnauthorizedError';
      throw err;
    }
    await TokenMiddleware.verifyToken(token);
    const data = await categoryService.validateBodyAdd(req.body);
    const category = await categoryService.add(data);
    return res.status(201).json({ category });
  },

  async list(req, res) {
    const token = req.headers.authorization;
    if (!token) {
      const err = new Error('Token not found');
      err.name = 'UnauthorizedError';
      throw err;
    }
    await TokenMiddleware.verifyToken(token);
    const categories = await categoryService.list();
    return res.status(200).json(categories);
  },

};

module.exports = categoryController;