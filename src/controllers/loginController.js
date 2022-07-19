const loginService = require('../services/loginService');

const login = async (req, res) => {
  const data = await loginService.validateBodyLogin(req.body);
  const user = await loginService.getByEmailOrThrows(data.email);
  const token = await loginService.makeToken(user);
  return res.status(200).json({ token });
};

module.exports = { login };