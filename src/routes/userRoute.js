const { Router } = require('express');
const rescue = require('express-rescue');
const userController = require('../controllers/user.Controller');

const userRoute = Router();

userRoute.post('/', rescue(userController.add));

module.exports = userRoute;