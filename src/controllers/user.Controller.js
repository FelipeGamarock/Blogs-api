const userService = require('../services/userService');
const TokenMiddleware = require('../middlewares/tokenMiddleware');

const usersController = {

  async add(req, res) {
    const data = await userService.validateBodyAdd(req.body);
    const user = await userService.add(data);
    const token = await userService.makeToken(user);
    return res.status(201).json({ token });
  },

  async list(req, res) {
    const token = req.headers.authorization;
    if (!token) {
      const err = new Error('Token not found');
      err.name = 'UnauthorizedError';
      throw err;
    }
    await TokenMiddleware.verifyToken(token);
    const users = await userService.list();
    return res.status(200).json(users);
  },

};

module.exports = usersController;