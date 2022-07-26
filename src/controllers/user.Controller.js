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
    await TokenMiddleware.verifyToken(req.headers);
    const users = await userService.list();
    return res.status(200).json(users);
  },

  async get(req, res) {
    await TokenMiddleware.verifyToken(req.headers);
    const { id } = req.params;
    const user = await userService.getEager(id);
    return res.status(200).json(user);
  },

};

module.exports = usersController;