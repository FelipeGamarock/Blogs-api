const userService = require('../services/userService');

const usersController = {

  async add(req, res) {
    const data = await userService.validateBodyAdd(req.body);
    const user = await userService.add(data);
    const token = await userService.makeToken(user);
    return res.status(201).json({ token });
  },

};

module.exports = usersController;