const postService = require('../services/postService');
const TokenMiddleware = require('../middlewares/tokenMiddleware');

const usersController = {

  async list(req, res) {
    await TokenMiddleware.verifyToken(req.headers);
    const posts = await postService.list();
    res.json(posts);
  },

};

module.exports = usersController;
