const { Router } = require('express');
const rescue = require('express-rescue');
const postController = require('../controllers/postController');

const blogPostRouter = Router();

blogPostRouter.get('/', rescue(postController.list));

module.exports = blogPostRouter;  