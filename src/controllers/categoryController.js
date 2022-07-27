const categoryService = require('../services/categoryService');
const TokenMiddleware = require('../middlewares/tokenMiddleware');

const categoryController = {

  async add(req, res) {
    await TokenMiddleware.verifyToken(req.headers);
    await categoryService.validadeCategoryBody(req.body);
    const category = await categoryService.add(req.body);
    return res.status(201).json(category);
},

  async list(req, res) {
    await TokenMiddleware.verifyToken(req.headers);
    const categories = await categoryService.list();
    return res.status(200).json(categories);
  },

};

module.exports = categoryController;