const { Router } = require('express');
const rescue = require('express-rescue');
const categoryController = require('../controllers/categoryController');

const categoryRoute = Router();

categoryRoute.post('/', rescue(categoryController.add));
categoryRoute.get('/', rescue(categoryController.list));

module.exports = categoryRoute;