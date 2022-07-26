const categoryService = require('../services/categoryService');
const TokenMiddleware = require('../middlewares/tokenMiddleware');

const categoryController = {

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