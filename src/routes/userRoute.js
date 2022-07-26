const { Router } = require('express');
const rescue = require('express-rescue');
const userController = require('../controllers/user.Controller');

const userRoute = Router();

userRoute.post('/', rescue(userController.add));
userRoute.get('/', rescue(userController.list));
userRoute.get('/:id', rescue(userController.get));

module.exports = userRoute;